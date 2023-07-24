// import wishlist schema

const wishlist =require('../model/whislistSchema')


// add products to wish list

exports.addtoWishlist = async(req,res)=>{
    //get specific product details from the requset
    // req.body={
    //     "id":"123",
    //     "title":"bag",
    //     "price":'999'
    // }

    //js destructring

    const {id,title,price,image} = req.body
    // logic for wishlist
    try{
        //cheack if product is already in wishlist
        const item = await wishlist.findOne({id})
        if(item){
            res.status(401).json('Item is Already in Wishlist🤗')

        }
        else{
            //product is added to wishlist
            const newProduct = await wishlist({id,title,price,image})
            //to store in db
            await newProduct.save()
            res.status(200).json('Item Added to Wishlist 😉')
        }
      
    }
    catch(error){
        res.status(404).json(error)
    }
}

// get wishlist product from db

exports.getWishlist = async(req,res)=>{
    try {
        //logic
        //get all products from wishlist collections
        
    const allWishlist = await wishlist.find()
    res.status(200).json(allWishlist)// resposnce sent back to client
    } catch (error) {

        res.status(404).json(error)//error
        
    }
}

//delete wishlist product  from db

exports.deleteWishlist = async(req,res)=>{
    // get particular product id

    const {id} = req.params
    try {
        // logic
    const removeWishlist = await wishlist.deleteOne({id})

    if(removeWishlist){
        //get all wishlist products after removing particular products
        const remainingWishlist = await wishlist.find()
        res.status(200).json(remainingWishlist) // responce send back to clint
    }
        
    } catch (error) {
        res.status(404).json(error)// error responce
    }
}
