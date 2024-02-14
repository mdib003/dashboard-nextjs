import mongoose from 'mongoose';


export const connectDB = async() => {
    let connectionStatus = false
    try {
      await mongoose.connect(process.env.MONGODB_DATABASE as any).then((db) => {        
                console.log('Connection established')
                connectionStatus =  db.connection.readyState === 1 ? true : false                
        })

    } catch (err) {
        console.log(err);
    }
    return connectionStatus
}




