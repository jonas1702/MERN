import express, { request, response } from "express";
import { User } from "../models/userModel.js";

const router = express.Router()

/* get all users */
router.get('/', async (request, response) => {
    try {
        const users = await User.find({})

        return response.status(200).json({
            count: users.length,
            data: users
        })
    } catch(error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

/* create new user */
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.username || 
            !request.body.password 
        ) {
            return response.status(400).send({
                message: 'send all the required fields!'
            })
        }
        
        const newUser = {
            username: request.body.username,
            password: request.body.password
        }

        const user = await User.create(newUser)

        return response.status(201).send(user)
    } catch(error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})


export default router