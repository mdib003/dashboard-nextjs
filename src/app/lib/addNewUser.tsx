"use server"

import { revalidatePath } from "next/cache"
import { connectDB } from "./database"
import { User } from "./models/userSchema"
import { redirect } from "next/navigation"

export const addNewUser = async ({ name, contact, email, password, address, role, status, img }: any) => {   
    
    try {
        await connectDB()
        let newUser = new User({ name, contact, email, password, address, role, status, img })
        await newUser.save()
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/users')
    redirect(`/users`)
}