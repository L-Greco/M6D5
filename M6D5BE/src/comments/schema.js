import mongoose from "mongoose"

const { Schema, model } = mongoose

const CommentSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },

        product: {
            type: Schema.Types.ObjectId, required: true, ref: "Product" // here we write the model name 
        },


    },
    { timestamps: true }
)

export default model("Comment", CommentSchema)