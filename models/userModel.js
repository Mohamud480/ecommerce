import mongoose from "mongoose";

const userschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false

    }
})
const users= mongoose.model("Users",userschema)
export default users()