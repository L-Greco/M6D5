import mongoose from "mongoose"

const { Schema, model } = mongoose



const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        }, category: {
            type: String,
            required: true,
        },
        comments: [
            { type: Schema.Types.ObjectId, ref: "Comment" } // here as a "Blog" 
        ]            // we write what we export from Blog Schema from "Blog"
    },
    { timestamps: true }
)
// here the collection is named Product
// 


export default model("Product", ProductSchema)