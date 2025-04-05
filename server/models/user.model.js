import mongoose from "mongoose";
import { profileSchema } from "./profile.model.js";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }, 
    role: {
        type: String,
        required: true
    },
    profile: profileSchema
}, {
    timestamps: true
});


const User = mongoose.model("User", userSchema);

export default User;