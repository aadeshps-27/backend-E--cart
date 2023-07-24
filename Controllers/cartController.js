// import cartschema

const cart = require('../model/cartSchema')

// add to cart

exports.addtoCart = async (req, res) => {
    // get products details from request
    const { id, title, price, image, quantity } = req.body

    try {
        // check if products is already in cart then update the quandity price
        const product = await cart.findOne({ id })
        if (product) {
            // if product is already is cart increment quantity
            product.quantity += 1


            // ubdate grant total
            product.grandTotal = product.price * product.quantity

            //save changes into to db

            product.save()

            // send responces back to the client

            res.status(200).json('Item Is Ubdated ✅')
        }


        //else add to cart
        else {
            //else product is not in the cart , add to cart
            const newProduct = new cart({

                id, title, price, image, quantity, grandTotal: price
            })
            // save new products
            await newProduct.save()

            //responce send back to the client

            res.status(200).json('Item Is add to Cart 🛒')
        }

    } catch (error) {
        res.status(401).json(error)
    }


}

exports.getCart = async (req, res) => {
    // get cart items from cart collections

    try {
        const allCart = await cart.find()

        // respone send back to the client 

        res.status(200).json(allCart)
    } catch (error) {
        res.status(401).json(error)

    }


}
// cart deleate

exports.delete = async (req, res) => {
    //remove cart items

    //get product id from particular

    const { id } = req.params

    try {
        const removeCartItems = await cart.deleteOne({ id })

        if (removeCartItems.deleteCount != 0) {
            //get all cart item after removing  particular cart items
            const allCart = await cart.find()
            res.status(200).json(allCart)
        }

    } catch (error) {
        res.status(401).json(error)
    }
}

//increment cart

exports.incrementCartItems = async (req, res) => {
    // get products id from requsest

    const { id } = req.params

    try {
        //if product in the cart

        const product = await cart.findOne({ id })

        if (product) {
            // ubtate the quantity and grant total
            product.quantity += 1;
            product.grandTotal = product.quantity * product.price
            //save changes

            await product.save()
            const allCart = await cart.find()

            // respone send back to the client 

            res.status(200).json(allCart)

        }
        else {
            res.status(404).json('Product Not Found')
        }

    } catch (error) {
        res.status(401).json(error)
    }
}
exports.decrementCartItems = async (req, res) => {
    // get products id from requsest

    const { id } = req.params

    try {
        //if product in the cart

        const product = await cart.findOne({ id })

        if (product) {
            // ubtate the quantity and grant total
            product.quantity -= 1;


            if (product.quantity == 0) {
                const removeCartItems = await cart.deleteOne({ id })
                const allCart = await cart.find()
                res.status(200).json(allCart)

            }
             
                else {
                    product.grandTotal = product.quantity * product.price
                    //save changes
                    await product.save()
                    const allCart = await cart.find()
                    // respone send back to the client 
                    res.status(200).json(allCart)

                }



        }
        else {
            res.status(404).json('Product Not Found')
        }

    } catch (error) {
        res.status(401).json(error)
    }
}