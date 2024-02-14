import mongoose from "mongoose";
const {Schema} = mongoose

const UserSchema = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        role: {type: String, required: true},
        status: {type: String, required: true},
        img: {type: String, required: true},
        contact: {type: Number, required: true},
        address: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

export const User = mongoose.models.users || mongoose.model('users', UserSchema)