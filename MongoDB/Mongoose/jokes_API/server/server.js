const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json(),express.urlencoded({extended:true}));

require('./config/mongoose.config')

require('./routes/jokes.routes')(app)


app.listen(port,()=>console.log(`Connected ${port}`));