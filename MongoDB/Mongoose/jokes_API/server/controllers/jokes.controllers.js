const Joke = require('../models/jokes.models')

module.exports.getAllJokes =(req,res)=>{
    Joke.find()
    .then((allJokes)=>res.json({result:allJokes}))
    .catch((err)=>res.json(err));
}
module.exports.getOneJoke = (req,res) =>{
    Joke.findOne({_id:req.params.id})
    .then((oneJoke)=>res.json({result:oneJoke}))
    .catch((err)=>res.json(err));
}
module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)
    .then((newJoke)=>res.json({joke:newJoke}))
    .catch((err)=>res.json(err));
}
module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then((updatedJoke)=>res.json({joke:updatedJoke}))
    .catch((err)=>res.json(err));
}
module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id:req.params.id})
    .then((result)=>res.json({result:result}))
    .catch((err)=>res.json(err));
}