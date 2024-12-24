import mongoose, { Schema, Document } from "mongoose";

// Create an interface for the User
interface IUser extends Document {
  username: string;
  password: string;
}

interface IContent extends Document {
  link: string;
  type: string;
  title: string;
  tags: mongoose.Types.ObjectId[];
  userId: mongoose.Types.ObjectId;
}

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export with consistent model name
export const User = mongoose.model<IUser>('User', userSchema);

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }, // The ref name should match the model name, else the program will throw an error
});

export const Content = mongoose.model<IContent>('Content', contentSchema);