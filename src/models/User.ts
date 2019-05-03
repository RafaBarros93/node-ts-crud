import { Schema, model } from "mongoose";
import UserInterface from "../interfaces/UserInterface";

const UserSchema = new Schema(
    {
        email: String,
        fisrtName: String,
        lastName: String
    },
    { timestamps: true }
);

export default model<UserInterface>("User", UserSchema);
