const mongoose =require('mongoose')

// def ne  scheama for product collecton to store data
const productSchema = new mongoose.Schema({
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
    description:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    rating:{
        rate:{
            type:Number,
            require:true,
        },
        count:{
            type:Number,
            require:true,
        }

    }
    
})

// create a model to store detals
const  products  = new mongoose.model('products',productSchema)

// exports model
module.exports = products

