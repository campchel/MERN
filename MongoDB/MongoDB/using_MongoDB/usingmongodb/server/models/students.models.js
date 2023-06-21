const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    home_state: {
        type: String,
    },
    lucky_number: {
        type: Number,
    },
    birthday: {
        month: {
            type: Number,
        }, 
        day: {
            type: Number,
        },
        year: {
            typer: Number
        }
    }
})

const Students = mongoose.model("Students", StudentSchema)

module.exports = Students;