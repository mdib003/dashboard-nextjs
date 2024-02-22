"use server"

import { revalidatePath } from "next/cache"
import { connectDB } from "./database"
import { Products } from "./models/productsSchema"
import { redirect } from "next/navigation"

export const addNewProduct = async ({ title, description, price, stock, img }: any) => {

    try {
        await connectDB()
        let newProduct = new Products({ title, description, price, stock, img })
        await newProduct.save()
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/products')
    redirect(`/products`)
}