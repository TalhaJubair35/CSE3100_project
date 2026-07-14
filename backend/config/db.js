import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jubu_db_user:jubu123@cluster0.l0ra8gy.mongodb.net/CarWheels').then(() => console.log('DB Connected'))
}