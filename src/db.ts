import mongoose, { Schema, Document } from "mongoose";

// Create an interface for the User
interface IUser extends Document {
    username: string;
    password: string;
}

interface IContent extends Document{
    link: string,
    type: string,
    title: string,
    tags: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
}

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export the model directly instead of in an object
export const UserModel = mongoose.model<IUser>('users', userSchema);

const contentSchema = new Schema({
    link: {type: String , required: true},
    type: {type: String, required:true},
    title: {type: String, required: true },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

export const contentModel = mongoose.model<IContent>('contents',contentSchema);