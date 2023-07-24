// logc to resolve


//import product  collectons

const products = require('../model/productSchema')

//import wishlist schema collection



//get all products 

exports.getallproducts = async (req,res)=>{
    //logic
    try{
        // get all products  from product collection mogodb
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//view particular product details


exports.viewproduct = async(req,res)=>{
    // logic
    // get particular product details
    const id=req.params.id
    try{
        const product = await products.findOne({id})
        if(product){

            res.status(200).json(product)
        }
        else{
            res.status(401).json('Product Not Found ❌')
        }

    }

    

    catch(err){
        res.status(401).json(err)
    }
}


