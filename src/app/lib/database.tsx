import mongoose from 'mongoose';

let connectionStatus = false

export const connectDB = async () => {
    try {
        if (!connectionStatus) {
            await mongoose.connect(process.env.MONGODB_DATABASE as any).then((db) => {
                console.log('Connection established')
                connectionStatus = db.connection.readyState === 1 ? true : false
            })
        }
    } catch (err) {
        console.log(err);
    }
}




