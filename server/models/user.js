const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, 'A user must have a first name']},
    middleName: {type: String, required: false},
    lastName: { type: String, required: [true, 'A user must have a last name'] },
    username: { type: String },
    email: { type:String },
    dateOfBirth: { type: Date }
})

const User = mongoose.model('User', userSchema)

module.exports = User