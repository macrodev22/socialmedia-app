const express = require('express')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const router = require('./routes')



const app = express()

app.use(cookieParser())
app.use(cors({ credentials: true }))
app.use(express.json())

app.use('/api', router)


module.exports = app