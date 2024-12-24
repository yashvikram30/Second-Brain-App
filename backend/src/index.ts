import express from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {z} from "zod";
import bcrypt from "bcrypt";
import cors from "cors";
import { Content, User } from "./db";
import { userMiddleware } from "./middleware";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const url: string = String(process.env.MONGO_URL);
const JWT_SECRET = (process.env.JWT_SECRET);

interface SigninRequest {
    username: string;
    password: string;
}

//zod validation
const signupSchema = z.object({
    username: z.string(),
    password: z.string()
      .min(8, 'Password must be at least 8 characters')
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
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(403).json({
          message: 'User with this username already exists'
        });
      }
  
      // Step 3: Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Step 4: Create user
      const newUser = await User.create({
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

app.post('/api/v1/signin', async (req: any, res: any) => {
  try {
      // Step 1: Check if the user exists
      const { username, password } = req.body;
      const userAccount = await User.findOne({ username });

      if (!userAccount) {
          return res.status(403).json({
              message: 'User does not exist',
          });
      }

      // Step 2: Check if the password matches with Bcrypt
      const confirmedUser = await bcrypt.compare(password, userAccount.password);
      if (!confirmedUser) {
          return res.status(403).json({
              message: 'Password is incorrect',
          });
      }

      // Step 3: Return a JWT token to the user
      const token = jwt.sign(
          { id: userAccount._id },
          String(JWT_SECRET),
      );

      // Step 4: Return the token as a cookie to the user in the header
      res.cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
      });

      // Step 5: Send a success response
      return res.status(200).json({
          message: 'Sign-in successful',
          token,
      });
  } catch (e: unknown) {
      console.error(e); // Logs the actual error
      res.status(500).json({
          message: 'Error during sign-in. Please try again later.',
      });
  }
});


app.post('/api/v1/content',userMiddleware, async (req,res)=> {
    const {link,type,title} = req.body;
    await Content.create({
      link,
      type,
      title,
      //@ts-ignore
      userId: req.userId,
      tags: []
    })

    res.json({
      message: "Content added"
    })
})


app.get('/api/v1/content',userMiddleware,async(req,res)=>{
    // @ts-ignore
    const userId = req.userId;
    const content = await Content.find({
      userId: userId
    }).populate("userId","username") 
    // basically this will return the username, which will allow us to update it on frontend as well
    res.json({
      content
    })
})


app.delete('/api/v1/content',userMiddleware,async (req,res)=>{
    const contentId = req.body.contentId;
    await Content.deleteMany({
      contentId,
      // @ts-ignore
      userId: req.userId
    })
    res.json({
      message: "Deleted"
    })
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


