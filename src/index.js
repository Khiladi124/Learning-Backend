//require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import { DB_NAME } from './constatnts.js';
import connectDB from './db/index.js';
import express from "express";

dotenv.config({
    path: './env'
});

// and then do in script "dev":"nodemon -r dotenv/config --experimental-json-modules src/index.js"
connectDB()
.then(
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is Running at port : ${process.env.PORT} `);
    })
)
.catch((error)=>{
    console.log("Mongo db connection failed ",error);
});


/*
;(async()=>{
    try{
     const connect=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
     application.on("error",(error)=>{
        console.log("ERR: ", error);
        throw error;
     });

     app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
     })
    }catch(error){
        console.errot("ERROR:",error)
        throw error;
    }
})()

*/