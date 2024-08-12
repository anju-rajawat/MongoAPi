import User from "../model/user.model.js"
import jwt from 'jsonwebtoken';
export const SignUp = (req,res,next)=>{
    console.log(req.body)

    User.create(req.body).then(result=>{
       
        const payload = {subject:req.body.email};
        
        const token =   jwt.sign(payload,"asjdflajsdfoiajbhola")
       
        return res.status(200).json({message:"Sinup success",result,token})
    
    }).catch(err=>{
        console.log(err);
        return res.status(401).json({message:"Internal server error"})
    });
}


export const SignIn = async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email});
    console.log(user)
    if(User.comparePass(req.body.password,user.password)){
        return res.status(401).json({message:"Sign in success..."})
    }else{
        return res.status(401).json({message:"User not found"})
    }

}