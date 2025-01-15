import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const login = async( req,res) => {

try{
const {email,password} = req.body;
const user = await User.findOne({email})
if(!user) {
    res.status(404).json({success:false, error:"User not found!"})
}

const isMatch = await bcrypt.compare(password,user.password)
if(!isMatch) {
    res.status(404).json({success:false, error:"wrong password"})
}
// if password match  generate token
const token =  jwt.sign ({_id:user._id,role:user.role})
//payload=>data store inside the token

process.env.JWT_KEY,{expiredIn:"10d"}
//after 10 days it will be not worked!!

res.status(200).json({success:true,token,user:{_id:user._id,name:user.name,role:user.role}})


}
catch(error){
console.log(error.message)
}



}
export { login };

//1. data destructure
//2. use email to find user
//3.  if email not eixsted
//4. if user existed verify the password const ismatch  const isMatch = await bcrypt.compare(password,user.password)  . user.pass = encrypted pass

//5. // if password match  generate token    const token = JsonWebTokenError 
