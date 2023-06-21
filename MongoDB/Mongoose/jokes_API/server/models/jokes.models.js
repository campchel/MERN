const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup:{
        type: String,
        required:[true,"Setup your joke."]
    },
    punchline:{
        type: String,
        requried:[true, "Give the punchline."]
    }
},{timestamps:true})

const Joke = mongoose.model("Jokes",JokesSchema);

module.exports = Joke;