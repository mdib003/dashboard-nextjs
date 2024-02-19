import { connectDB } from "./database"
import { Products } from "./models/productsSchema"
import { User } from "./models/userSchema"

let connectionStatus = false

export const fetchUsers = async () => {
    try {
        if (!connectionStatus) {
            connectionStatus = await connectDB()
        }
        let users = await User.find()
        return { users }
    } catch (err) {
        console.error(err)
    }
}

export const fetchProducts = async () => {
    try {
        if (!connectionStatus) {
            connectionStatus = await connectDB()
        }
        let products = await Products.find()
        return { products }
    } catch (err) {
        console.error(err)
    }
}