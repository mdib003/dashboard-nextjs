'use server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { connectDB } from "./database";
import { User } from "./models/userSchema";

export const fetchUserById = async (id: any, update = false, updatedUserData = {}) => {
    try {
        await connectDB()
        if (!update) {
            let user = await User.findById(id)
            return user
        } else {
            await User.findByIdAndUpdate(id, updatedUserData)
        }
    } catch (err) {
        console.error(err)
    }
    revalidatePath("/users");
    redirect(`/users`)
}