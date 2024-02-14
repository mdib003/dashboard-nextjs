import mongoose from "mongoose";
const {Schema} = mongoose

const UserSchema = new Schema(
    {
        name: String,
        email: String,
        role: String,
        status: String,
        img: String
    },
    {
        timestamps: true
    }
)

export const User = mongoose.models.users || mongoose.model('users', UserSchema)