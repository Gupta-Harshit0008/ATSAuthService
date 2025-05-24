const express = require('express')
const morgan=require('morgan')
require('dotenv').config()
const mongoose= require('mongoose')
const accessLogs=require('./utils/logger')
const router=require('./router/authRouter')
const app= express()

// Setup the logger
app.use(morgan('combined', { stream: accessLogs.accessLogStream }));

app.use(express.json())
const DB=process.env.MONGODB_STRING.replace('<db_password>',process.env.db_password)

mongoose.connect(DB).then(con=>{
    console.log('Datebase connection successfull')
})

app.use('/v1/auth',router)

app.listen(8001,()=>{
console.log('app is running at port 8001')
})