'use server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { connectDB } from "./database";
import { Products } from "./models/productsSchema";

export const fetchProductById = async (id: any, update = false, updatedProductData = {}) => {
    try {
        await connectDB()
        if (!update) {
            let product = await Products.findById(id)
            return product
        } else {
            await Products.findByIdAndUpdate(id, updatedProductData)
        }
    } catch (err) {
        console.error(err)
    }
    revalidatePath("/products");
    redirect(`/products`)
}