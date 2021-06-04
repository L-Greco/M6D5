import express from "express"
import cors from "cors"
import productsRouter from "./products/index.js"
import commentPostsRouter from "./comments/index.js"
import { badRequestErrorHandler, notFoundErrorHandler, forbiddenErrorHandler, catchAllErrorHandler } from "./errorHandlers.js"
import mongoose from "mongoose"


const server = express()

const port = process.env.PORT || 3001

server.use(express.json())

server.use(cors())
server.use("/products", productsRouter)
server.use("/comments", commentPostsRouter)



// ******** ERROR MIDDLEWARES ************

server.use(badRequestErrorHandler)
server.use(notFoundErrorHandler)
server.use(forbiddenErrorHandler)
server.use(catchAllErrorHandler)
//mongoose is  the lib for the MongoDb Database
mongoose
    .connect(process.env.ATLAS_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(
        server.listen(port, () => {
            console.log("Running on port", port)
        })
    )
    .catch(err => console.log(err))
