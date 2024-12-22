import express from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {z} from "zod";
dotenv.config();


const app = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const url: string= String(process.env.MONGO_URL);

//zod validation
const Schema = z.object({
    
})

app.post('/api/v1/signup',(req,res)=>{

})


app.post('/api/v1/signin',(req,res)=>{
    
})


app.post('/api/v1/content',(req,res)=>{
    
})


app.get('/api/v1/content',(req,res)=>{
    
})


app.delete('/api/v1/content',(req,res)=>{
    
})


app.post('/api/v1/brain/share',(req,res)=>{
    
})

app.post('/api/v1/brain/:shareLink',(req,res)=>{
    
})

main()

async function main(){
    try{
        await mongoose.connect(url);
        console.log("MongoDB connected!");
    }
    catch(error){
        console.log("Error occurred:", error);
    }
    app.listen(port,()=>{
        console.log("Your server is live!")
    })
    
}


