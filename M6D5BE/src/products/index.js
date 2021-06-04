import express from "express"
import ProductModel from "./Schema.js"
import createError from "http-errors"

const productsRouter = express.Router()

productsRouter.post("/", async (req, res, next) => {

    try {
        const newProduct = new ProductModel(req.body)
        const { _id } = await newProduct.save()


        res.status(201).send(_id)

    } catch (error) {
        console.log(error)
        if (error.name === "ValdidationError") {
            next(createError(400, error))
            console.log(error);
        } else {
            next(createError(500, "An error occurred while saving the product "))
        }

    }
})


productsRouter.get("/", async (req, res, next) => {
    try {
        const products = await ProductModel.find().populate("comments")
        res.send(products)

    } catch (error) {
        console.log(error, "error while fetching the products");
        next(error)
    }
})


productsRouter.get("/:productId", async (req, res, next) => {
    try {
        const id = req.params.productId
        const product = await ProductModel.findById(id).populate("comments")
        if (product) {
            res.send(product)
        } else {
            next(createError(404, `product with id: ${req.params.productId} not found!`))
        }

    } catch (error) {
        console.log(error)
        next(error)
    }
})
// This route brings the products Data with the Posts.
// productsRouter.get("/:productId/withPosts", async (req, res, next) => {
//     try {
//         const id = req.params.productId
//         const product = await ProductModel.findById(id).populate("blogs")
//         // const blogPosts = await blogModel.find().populate({path:"products","select":"name surname"}).populate("comments")
//         // in the code above we populate in chain 2 different paths and in the first one we populate only the name and the surname
//         if (product) {
//             res.send(product)
//         } else {
//             next(createError(404, `product with id: ${req.params.productId} not found!`))
//         }

//     } catch (error) {
//         console.log(error)
//         next(error)
//     }
// })





productsRouter.put("/:productId", async (req, res, next) => {
    try {

        const product = await ProductModel.findByIdAndUpdate(req.params.productId, req.body, {
            runValidators: true,
            new: true // me auti thn entoli stelnei meta to kainourgio kai oxi to palio
        })
        if (product) {
            res.send(product)
        } else {
            next(createError(404, `product with id: ${req.params.productId} not found!`))
        }
    } catch (error) {
        console.log(error);
        next(createError(500, "An error occurred while modifying the product"))
    }


})


productsRouter.delete("/:productId", async (req, res, next) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.productId)
        if (product) {
            res.status(204).send()
        } else {
            next(createError(404, `product with id: ${req.params.productId} not found!`))
        }
    } catch (error) {
        console.log("line 135" + error);
        next(error)
    }
})



export default productsRouter
