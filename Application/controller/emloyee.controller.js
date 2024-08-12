import Employee from "../model/employee.js";
export const findEmployee = (req,res,next)=>{
    Employee.find().populate("userId").then(result=>{
        return res.status(201).json({message:"Employee details: ",result})
    }).catch(err=>{
        console.log(err);
        return res.status(401).json({message:"Internal server error"})
    });
}
export const addEmloyee = (req,res,next)=>{
    Employee.create(req.body).then(result=>{
          return res.status(200).json({message:"Singup success",result})
      }).catch(err=>{
          console.log(err);
          return res.status(401).json({message:"Internal server error"})
      });
}