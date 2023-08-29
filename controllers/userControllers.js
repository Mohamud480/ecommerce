import userModel from "../models/userModel.js";
import generateToken from "../utils/genratToken.js";


export const register =async()=>{
    const {name, email, address, phone}=req.body;
    const userExists=user.findOne({email})
    if(userExists){
        res.status(400).json({massage:'user already exists'})
    }

    const user= Users.create({
        name, email, address, phone

    })
    if (user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            token:generateToken(user._id)
        })
    }else{
        res.status(201).json({massage:'invilid user data'});

    }
    
}
export const login = async(req, res)=>{
    const{email, password} = req.body;
    const user=Users.findOne({email});

    if (user&& password==user.password){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            token:generateToken(user._id)
        })

    }else{
        res.status(201).json({massage:'invilid u emai or password'});

    }
}