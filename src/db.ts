import mongoose, { model, Mongoose, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const UserModel = model("User",UserSchema);