const mongoose = require('mongoose')
const { ref } = require('vue')

const mediaSchema = new mongoose.Schema({ 
    type: String,
    uri: String
})

const postSchema = new mongoose.Schema({
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: [true, 'A post must have a user'] },
    body: { type:String, required: [true, 'A post must have a body']},
    media: { type: [mediaSchema] },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
})


postSchema.pre(/^find/, function(next) {

    this.populate({ path: 'user', select: '-__v -email -dateOfBirth -_id' })

    next()
})

const Post = mongoose.model('Post', postSchema)


module.exports = Post