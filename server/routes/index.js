const express = require('express')
const jwt = require('jsonwebtoken')

const authController = require('../controllers/authController')
const postController = require('../controllers/postController')

const router = express.Router()
const CSRF_SECRET = process.env.CSRF_SECRET

const csrfTokens = {}

const validateCsrfToken = (req, res, next) => {
    const token = req.cookies['XSRF-TOKEN']

    if (!token || token != csrfTokens[req.ip]) return res.status(403).json({ detail: 'Invalid CSRF Token' })
    
    next()
}

router.get('/csrf-token', (req, res) => {
    const csrfToken = jwt.sign({ timestamp: Date.now() }, CSRF_SECRET)

    // Store token in set
    csrfTokens[req.ip] = csrfToken

    res.cookie('XSRF-TOKEN', csrfToken, { httpOnly: false })

    res.json({ csrfToken })
})

// router.get('/posts', validateCsrfToken, (req, res) => res.send('Good'))
router.post('/login', authController.login)
router.post('/register', authController.register)

router.get('/posts', postController.getPosts)
router.post('/posts', postController.createPost)

// exports.validateCsrfToken = validateCsrfToken

module.exports = router