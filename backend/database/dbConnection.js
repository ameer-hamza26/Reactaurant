import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        });
        console.log(`Connected to ${process.env.DB_NAME} database`);
    } catch (error) {
        console.log(error);
    }
}

export default dbConnection;