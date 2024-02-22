"use server"

import { revalidatePath } from "next/cache";
import { connectDB } from "./database";
import { Products } from "./models/productsSchema";
import { redirect } from "next/navigation";

export const deleteProductById = async (id: any) => {
    let productsId = JSON.parse(id)
    try {
        await connectDB();
        let deletedProducts = await Products.findByIdAndDelete(productsId)
    } catch (err) {
        console.log(err);
    }
    revalidatePath('/products')
    redirect('/products')
}

