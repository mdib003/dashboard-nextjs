import { connectDB } from "./database"
import { User } from "./models/userSchema"

export const fetchUsers = async () => {
    let checkConnection;
    try {
        if (!checkConnection) {
            await connectDB()
            checkConnection = true
        }       
        const users = await User.find()
    } catch (err) {
        console.error(err)
    }
}