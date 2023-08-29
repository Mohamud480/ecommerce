import mongoose from "mongoose";

const connectDB= ()=>{
    mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        console.log('datebase connect')
    })
}
export default connectDB