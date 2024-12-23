import express from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {z} from "zod";
import bcrypt from "bcrypt";
import cors from "cors";
import { UserModel } from "./db";

dotenv.config();


const app = express();

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const url: string= String(process.env.MONGO_URL);
const JWT_SECRET:string = String(process.env.JWT_SECRET);
const JWT_EXPIRES_IN = '24h';
const COOKIE_MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

app.use(express.json());
app.use(cors());

interface SigninRequest {
    username: string;
    password: string;
}

//zod validation
const signupSchema = z.object({
    username: z.string(),
    password: z.string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
});

  
// Express route setup
app.post('/api/v1/signup', async function(req:any,res:any) {

    try {
      // Step 1: Zod validation
      const validationResult = await signupSchema.safeParseAsync(req.body);
      
      if (!validationResult.success) {
        return res.status(411).json({
          message: 'Validation failed. Error in inputs!',
          errors: validationResult.error.errors
        });
      }
  
      const { username, password } = validationResult.data;
  
      // Step 2: Check if user already exists
      const existingUser = await UserModel.findOne({ username });
      if (existingUser) {
        return res.status(403).json({
          message: 'User with this username already exists'
        });
      }
  
      // Step 3: Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Step 4: Create user
      const newUser = await UserModel.create({
        username,
        password: hashedPassword
      });
  
      // Step 5: Return success response (without sending back sensitive data)
      return res.status(201).json({
        message: 'User created successfully',
        userId: newUser.id
      });
  
    } catch (e:unknown) {
      // Log the error for debugging (consider using a proper logging service)
      console.error('Signup error:', e);
  
      // Return a generic error message to the client
      return res.status(500).json({
        message: 'Internal server error occurred'
      });
    }
});

app.post('/api/v1/signin',async(req:any,res:any)=>{
    try{
        // Step:1 Check if the user exists
        const { username, password } = req.body;
        const userAccount = await UserModel.findOne(username);

        if(!userAccount){
            return res.status(403).json({
                message: 'User does not exist'
            })
        }

        // Step:2 Check if the password matches with Bcrypt
        const confirmedUser = bcrypt.compare(password,userAccount.password);
        if(!confirmedUser){
            return res.json(403).json({
                message: 'Password is incorrect'
            })
        }

        // Step:3 Return a jwt token to the user
        const token = jwt.sign({
            id: userAccount._id
        },JWT_SECRET,{
            expiresIn: JWT_EXPIRES_IN
        });

        // Step:4 Return the token as a cookie to the user in the header
        res.cookie('token', token, {
            httpOnly: true,           // Prevents JavaScript access to cookie
            secure: process.env.NODE_ENV === 'production', // HTTPS only in production
            sameSite: 'strict',         // CSRF protection
            maxAge: COOKIE_MAX_AGE,       
            path: '/',                // Cookie is available for all paths
        });
    }
    catch(e:unknown){
        res.status(500).json({
            message: "Error during sign-in",
            error: e,
        });
    }
    
})


app.post('/api/v1/content',()=>{
    
})


app.get('/api/v1/content',()=>{
    
})


app.delete('/api/v1/content',()=>{
    
})


app.post('/api/v1/brain/share',()=>{
    
})

app.post('/api/v1/brain/:shareLink',()=>{
    
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


