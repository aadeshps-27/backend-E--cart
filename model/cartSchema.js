const mongoose =require('mongoose')

// def ne  scheama for product collecton to store data
const cartSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    title:{
        type:String,
        require:true,
    },
    
    price:{
        type:Number,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
   quantity:{
        type:Number,
        require:true,
    },
    grandTotal:{
        type:Number,
        require:true,
    },
    

   
})

// create a model to store detals
const  cart  = new mongoose.model('cart',cartSchema)

// exports model
module.exports = cart

