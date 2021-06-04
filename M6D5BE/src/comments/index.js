import express from "express"
import createError from "http-errors"
import CommentModel from "./schema.js"
import ProductModel from "../products/Schema.js"



const commentPostsRouter = express.Router()


commentPostsRouter.post("/", async (req, res, next) => {

    try {


        const newComment = new CommentModel(req.body)
        const { _id } = await newComment.save()

        const product = await ProductModel.findByIdAndUpdate(req.body.product,
            {
                $push: { comments: _id }
            }
            , {
                runValidators: true,
                new: true // me auti thn entoli stelnei meta to kainourgio kai oxi to palio
            })



        res.status(201).send("You successfully posted a comment with id:" + _id + " for the product : " + product.name)

    } catch (error) {
        console.log(error)
        if (error.name === "ValdidationError") {
            next(createError(400, error))
        } else {
            next(createError(500, "An error occurred while saving the comment "))
        }

    }
})


commentPostsRouter.get("/", async (req, res, next) => {
    try {
        const comments = await CommentModel.find()
        res.send(comments)

    } catch (error) {
        console.log(error, "error while fetching the comments");
        next(error)
    }
})

commentPostsRouter.get("/:commentId", async (req, res, next) => {
    try {
        const id = req.params.commentId
        const comment = await CommentModel.findById(id).populate("product")
        if (comment) {
            res.send(comment)
        } else {
            next(createError(404, `comment with id: ${req.params.commentId} not found!`))
        }

    } catch (error) {
        console.log(error)
        next(error)
    }
})



commentPostsRouter.put("/:commentId", async (req, res, next) => {
    try {

        const comment = await CommentModel.findByIdAndUpdate(req.params.commentId, req.body, {
            runValidators: true,
            new: true // me auti thn entoli stelnei meta to kainourgio kai oxi to palio
        })
        if (comment) {
            res.send(comment)
        } else {
            next(createError(404, `comment with id: ${req.params.commentId} not found!`))
        }
    } catch (error) {
        console.log(error);
        next(createError(500, "An error occurred while modifying the comment"))
    }


})



commentPostsRouter.delete("/:commentId", async (req, res, next) => {
    try {
        const comment = await CommentModel.findByIdAndDelete(req.params.commentId)
        const product = await ProductModel.findByIdAndUpdate(req.body.product,
            {
                $pull: { comments: _id }
            }
            , {
                runValidators: true,
                new: true // me auti thn entoli stelnei meta to kainourgio kai oxi to palio
            })

        if (comment) {
            res.status(204).send()
        } else {
            next(createError(404, `comment with id: ${req.params.commentId} not found!`))
        }
    } catch (error) {
        console.log("line 135" + error);
        next(error)
    }
})





export default commentPostsRouter