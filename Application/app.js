import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import UserRouter from './routers/user.route.js'
import EmployeeRouter from './routers/emloyee.route.js';

const app = express();
mongoose.connect("mongodb://localhost:27017/demo").then(()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use("/user",UserRouter)
    app.use("/employee",EmployeeRouter)
    
    app.listen(3000,()=>{
        console.log("Server started...")
    })
}).catch(err=>{
    console.log(err)
})