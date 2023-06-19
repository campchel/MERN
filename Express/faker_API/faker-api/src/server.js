const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {faker} = require('@faker-js/faker');
const createUser =() =>{
    const fakeUser={
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastname:faker.person.lastName(),
        firstName:faker.person.firstName(),
        id:faker.string.uuid(),
    }
    return fakeUser;
}
const createCompany =() =>{
    const fakeComp ={
        id:faker.string.uuid(),
        name:faker.company.name(),
        address:{
            street:faker.location.street(),
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()
        }
    }
    return fakeComp;
}

app.get('/api/users/new',(req,res)=>{res.json({user:createUser()})});

app.get('/api/companies/new',(req,res)=>{res.json({user:createCompany()})});

app.get('/api/user/company',(req,res)=>{res.json({user:createUser(),company:createCompany()})});




app.listen(port,()=>console.log(`Listening on port: ${port}`) );