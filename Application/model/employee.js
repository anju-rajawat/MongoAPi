import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    post:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    salary:{
        type:String,
        trim:true
    }
});

const Employee = mongoose.model("Employee",EmployeeSchema);
export default Employee;