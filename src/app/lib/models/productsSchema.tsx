import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
})

export const Products = mongoose.models.products || mongoose.model('products', productSchema);