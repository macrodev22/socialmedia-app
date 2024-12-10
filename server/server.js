const mongoose = require('mongoose')
const app = require('./app')

const DB = process.env.NODE_ENV === 'development' ? process.env.DB_LOCAL_URI : process.env.DB_PROD_URI

mongoose.connect(DB, {})
.then(conn => console.log(`ℹ️  Successfully connected to mongo DB`))
.catch(err => console.error(`🤪  Error connecting to mongodb`, err))

const PORT = process.env.SERVER_PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})
