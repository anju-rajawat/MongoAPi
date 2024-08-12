import jwt from 'jsonwebtoken'

export const Verifytoken = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    try{
        jwt.verify(token,"asjdflajsdfoiajbhola")
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({message:"Unauthorized user..."})
    }
}