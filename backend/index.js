import express, { request, response } from "express";
import { PORT, mongoDBurl } from "./config.js";
import { Book } from "./models/bookModel.js";
import { User } from "./models/userModel.js";
import booksRoute from './routes/booksRoute.js'
import usersRoute from './routes/userRoutes.js'
import cors from 'cors'

import mongoose from "mongoose";

const app = express()

app.use(express.json())

// app.use(cors({
//     origin: 'http://localhost:27107',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.use(cors())


/* setting up a route for the server */
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to the server! :)')
})

app.use('/books', booksRoute)

app.use('/users', usersRoute)

mongoose
    .connect(mongoDBurl)
    .then(() => {
        console.log('App connected')
        app.listen(PORT, () => {
            console.log(
                `server is running on localhost:${PORT}`
            )
        })
    })
    .catch((error) => {
        console.log(error)
    })