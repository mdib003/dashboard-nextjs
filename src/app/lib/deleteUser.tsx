"use server"

import { revalidatePath } from "next/cache";
import { connectDB } from "./database";
import { User } from "./models/userSchema";
import { redirect } from "next/navigation";

export const deleteUserById = async (id: any) => {
    
    let userId = JSON.parse(id)
    try {
        await connectDB();
        let deletedUser = await User.findByIdAndDelete(userId)
    } catch (err) {
        console.log(err);
    }
    revalidatePath('/users')
    redirect('/users')
}

