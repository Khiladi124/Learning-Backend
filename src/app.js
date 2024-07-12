import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();

// cors() , cookieParser() these are like middlewares 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb",})); //there different adders to url so to encode it
app.use(express.static("public"));// if images ,favicon and vdos are there then use public to store
app.use(cookieParser()); // so to access the cookies of user on the server
export{app};