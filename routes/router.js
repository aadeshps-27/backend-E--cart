// defne routs for clents requsest 

//mport express

const express = require('express')

// product ontroller
const productController = require('../Controllers/productController')
// wishlist scontroller

const wishlistController = require('../Controllers/wishlistContoller')

//import cart contoller

const cartController = require('../Controllers/cartController')



//usng express create an object for router class n order to set up
const router = new express.Router();

// resolve var os clent requsest

//ap| call
//
// 1 get all products

router.get('/products/allProducts',productController.getallproducts)

//2 view particular products details

router.get('/products/viewProducts/:id',productController.viewproduct)

//3 
router.post('/products/addtoWishlist',wishlistController.addtoWishlist)

// get wishlist details
router.get('/products/getWishlist',wishlistController.getWishlist)
//delete wishlist product
router.delete('/products/deleteWishlist/:id',wishlistController.deleteWishlist)


// add cart
router.post('/products/addtocart',cartController.addtoCart)


router.get('/products/getcart',cartController.getCart)

//delet cart products


router.delete('/products/delete/:id',cartController.delete)

//increment cart 
router.get('/products/increment/:id',cartController.incrementCartItems)
router.get('/products/decrement/:id',cartController.decrementCartItems)

//exports routs



module.exports = router
