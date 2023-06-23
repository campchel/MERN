const Products = require('../models/products.model')

module.exports.apiTest = (req,res) => {
    res.json({results:"It's all good"})
}

module.exports.createProduct = (req, res) => {
    const newProduct = req.body
    Products.create(newProduct)
    .then((product) => {res.json({results: product})})
    .catch((err) => {res.json({err:err})})
}

module.exports.allProducts = (req,res) => {
    Products.find()
    .then((allProducts) => {res.json({results: allProducts})})
    .catch((err) => {res.json({err:err})})
}

module.exports.readOne = (req,res) => {
    const idFromParams = req.params.id
    Products.findOne({_id: idFromParams})
    .then((oneProduct) => {res.json({results: oneProduct})})
    .catch((err) => {res.json({err:err})})
}

module.exports.update = (req,res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    Products.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then((update) => {res.json({results: update})})
    .catch((err) => {res.json({err:err})})
}

module.exports.delete = (req,res) => {
    Products.deleteOne({_id: req.params.id })
    .then((message) => {res.json({msg: message})})
    .catch((err) => {res.json({err:err})})
}