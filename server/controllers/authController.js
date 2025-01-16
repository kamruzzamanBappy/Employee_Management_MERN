import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const login = async( req,res) => {


    //verify user credential with try,catch. 1.district data
try{
const {email,password} = req.body;

//find user
const user = await User.findOne({email})
if(!user) {
    res.status(404).json({success:false, error:"User not found!"})
}
//user.password => encrypted
const isMatch = await bcrypt.compare(password,user.password)
if(!isMatch) {
    res.status(404).json({success:false, error:"wrong password"})
}

//GENERATING TOKEN
// if password match  generate token//
const token =  jwt.sign ({_id:user._id,role:user.role},
//payload=>data store inside the token

process.env.JWT_KEY,{expiresIn:"10d"}
//after 10 days it will be not worked!!

)


res.status(200).json({success:true,token,user:{_id:user._id,name:user.name,role:user.role}})
//RETURN TOKEN and user

}
catch(error){
 res.status(500).json({success:false, error:error.message})
}



}
export { login };

//1. data destructure
//2. use email to find user
//3.  if email not eixsted
//4. if user existed verify the password const ismatch  const isMatch = await bcrypt.compare(password,user.password)  . user.pass = encrypted pass

//5. // if password match  generate token    const token = JsonWebTokenError 
