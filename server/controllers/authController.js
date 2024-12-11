const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')


exports.login = async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne( { 
        $or: [
        { email: username },
        { username: username }
    ] 
}).exec()

res.json(user)
}

exports.register = catchAsync(async (req, res) => {
    const userCredentials = req.body

    const user = await User.create(userCredentials)

    res.send(user)
})