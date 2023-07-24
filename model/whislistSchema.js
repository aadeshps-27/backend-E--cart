const mongoose =require('mongoose')

// def ne  scheama for product collecton to store data
const wishlistSchema = new mongoose.Schema({
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
    

   
})

// create a model to store detals
const  wishlist  = new mongoose.model('wishlist',wishlistSchema)

// exports model
module.exports = wishlist

