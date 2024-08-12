import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        set:function(password){
            console.log(password)
            const saltkey = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(password,saltkey);
        }
    }
});

const User = mongoose.model("user",UserSchema);

User.comparePass = (password,encryptedPass)=>{
    return bcrypt.compareSync(password,encryptedPass);
}

export default User;