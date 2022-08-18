import mongoose from "mongoose";
import express from "express";

const PORT = process.env.PORT || 3000

const app = express()

export async function start() {
    try{
        await mongoose.connect('mongodb+srv://MatsveiDubaleka:m29092003O@cluster0.zwuj6px.mongodb.net/customreviews',
        )
        app.listen(PORT, (hostname) => {
            console.log('Server has been started...', hostname)
        })
    } catch(error) {
        console.error(error);
    }
}