const ProductController = require('../controllers/products.controller')

module.exports = (app) => {
    app.get('/api/testing', ProductController.apiTest)
    
    app.post('/api/products/new', ProductController.createProduct)

    app.get('/api/products', ProductController.allProducts)

    app.get('/api/products/:id', ProductController.readOne)
    
    app.put('/api/products/:id', ProductController.update)

    app.delete('/api/products/:id', ProductController.delete) 


}