import mongoose from 'mongoose';

export const profileSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profilePic: {
        url: String,
        publicId: String
    },
    phoneNumber: {
        type: String,
        required: false
    },
})