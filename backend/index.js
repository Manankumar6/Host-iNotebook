require('dotenv').config();

const mongoose = require("./db");
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
const path = require('path')
app.use(express.static(path.join(__dirname,'../client/build')))


//Available Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})