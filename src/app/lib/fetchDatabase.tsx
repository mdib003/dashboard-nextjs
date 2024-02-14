import { connectDB } from "./database"
import { User } from "./models/userSchema"

export const fetchUsers = async () => {
    let users;
    try {
        await connectDB()
        users = await User.find()
    } catch (err) {
        console.error(err)
    }
    return {users}
}