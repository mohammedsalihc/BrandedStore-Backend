require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const productRouter = require('./routes/product')
require('./db/connection')
const port = process.env.PORT || 8000


app.use(cors())
app.use(express.json())
app.use('/', productRouter)





app.listen(port, () => console.log(`server is srarted port ${port}`))