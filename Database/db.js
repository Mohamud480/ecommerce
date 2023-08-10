import mongoose from "mongoose";

const connectDB= ()=>{
    mongoose.connect('mongodb+srv://jubba4919:h15188437@ecommerce.ydzwzpb.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(()=>{
        console.log('datebase connect')
    })
}
export default connectDB