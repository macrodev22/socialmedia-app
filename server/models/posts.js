const mongoose = require('mongoose')
const { ref } = require('vue')

const mediaSchema = new mongoose.Schema({ 
    type: String,
    uri: String
})

const postSchema = new mongoose.Schema({
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    body: { type:String, required: [true, 'A post must have a body']},
    media: { type: [mediaSchema] },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
})


const Post = mongoose.Model('post', postSchema)

module.exports = Post