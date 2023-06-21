const JokeController = require("../controllers/jokes.controllers")

module.exports = (app) =>{
    app.get('/api/jokes',JokeController.getAllJokes);

    app.get('/api/jokes/:id',JokeController.getOneJoke);

    app.post('/api/jokes',JokeController.createJoke);

    app.patch('/api/jokes/:id',JokeController.updateJoke);
    
    app.delete('/api/jokes/:id',JokeController.deleteJoke);
}