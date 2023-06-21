const UserController = require('../controllers/product.controllers')

module.exports = (app) => {
    app.get('/api/testing', UserController.apiTest)
    
    app.get('/api/products/:id', UserController.readOne)
    
    app.get('/api/products', UserController.allProducts)
    
    app.post('/api/products/new', UserController.createProduct)

    app.put('/api/products/:id', UserController.update)

    app.delete('/api/products/:id', UserController.delete) 


}