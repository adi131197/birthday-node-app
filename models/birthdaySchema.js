const mongoose = require('mongoose')

const birthdaySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    dob: {
        type: Date,
        required: true
    }, 
    relationship: {
        type: String,
        required: true
    }
})

const Birthday = mongoose.model('birthdays', birthdaySchema)

module.exports = Birthday