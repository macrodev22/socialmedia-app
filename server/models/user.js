const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, 'A user must have a first name']},
    middleName: {type: String, required: false},
    lastName: { type: String, required: [true, 'A user must have a last name'] },
    username: { type: String },
    email: { type:String },
    dateOfBirth: { type: Date },
    photo: { type: String, default: 'https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg?semt=ais_hybrid' }
})

const User = mongoose.model('User', userSchema)

module.exports = User