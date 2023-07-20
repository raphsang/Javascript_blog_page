const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth').default

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
  .then(console.log('Connected to MONGO_DB'))
  .catch((err) => console.log(err))

app.use('./api/routes/auth', authRoute)

app.listen('5000', () => {
  console.log('Backend is running.')
})
