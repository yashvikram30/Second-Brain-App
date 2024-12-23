import mongoose, { Schema, Document } from "mongoose";

// Create an interface for the User
interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export the model directly instead of in an object
export const UserModel = mongoose.model<IUser>('users', userSchema);