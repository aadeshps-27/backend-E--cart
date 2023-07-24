// mport mongoose

const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log('Database Connectons Establshed ✌');
})
.catch((err)=>{
    console.log(err);
})