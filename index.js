// 1. to automatically load .env file into appliaction
require('dotenv').config()

// 2.  import express
const express = require('express')

//6. import cors
const cors = require('cors')
//import connecton from DB
require('./DB/connectons')

// mports router
const router = require('./routes/router')

// 3. create server applications
const server = express()

//5. define port
const PORT = 5000

//7 use server
server.use(cors())
server.use(express.json())
server.use(router)

//4. run the application

server.listen(PORT,()=>{
    console.log('Server Listening On Port 👂'  +PORT);
})

// router -localhost:5000

server.get('/',(req,res)=>{
    res.status(200).json("Mini-cart Server is Started 😊")
})