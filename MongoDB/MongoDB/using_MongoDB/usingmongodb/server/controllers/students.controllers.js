const Student = require('../models/students.models')

module.exports.apiTest = (req, res) => {
    res.json({message: "Hello World!"})

}

module.exports.createStudent = (req, res) => {
    Student.create(req.body)
    .then((newStudent) => {res.json({results: newStudent})})
    .catch((err) => {res.json({err: err})})
}

module.exports.allStudents= (req, res) => {
    Student.find()
    .then((allStudents) => {res.json({results:allStudents})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne= (req, res) => {
    Student.findOne({_id: req.params.id })
    .then((oneStudent) => {res.json({results:oneStudent})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update= (req, res) => {
    Student.findOneAndUpdate({_id:req.params.id }, req.body, {new:true, runValidators: true})
    .then((updateStudent) => {res.json({results:updateStudent})})
    .catch((err) => {res.json({err: err})})
}

module.exports.delete= (req, res) => {
    Student.deleteOne({_id: req.params.id })
    .then((deleteStudent) => {res.json({results:deleteStudent})})
    .catch((err) => {res.json({err: err})})
}