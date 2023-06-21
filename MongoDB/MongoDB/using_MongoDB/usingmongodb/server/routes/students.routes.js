const UserController = require('../controllers/students.controllers')

module.exports = (app) => {
    app.get('/api/testing', UserController.apiTest)
    
    app.get('/api/students/:id', UserController.readOne)
    
    app.get('/api/students', UserController.allStudents)
    
    app.post('/api/students/new', UserController.createStudent)

    app.put('/api/students/:id', UserController.update)

    app.delete('/api/students/:id', UserController.delete) 


}