const catchAsync = require('../utils/catchAsync')
const Post = require('../models/post')

exports.getPosts = catchAsync(async (req, res) => {
    const posts = await Post.find()

    res.json(posts)
})

exports.createPost = catchAsync(async (req, res) => {
    const post = req.body

    const newPost = await Post.create(post)

    res.status(201).json(newPost)
})