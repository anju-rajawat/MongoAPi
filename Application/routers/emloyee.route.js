import express from 'express';
import { addEmloyee,findEmployee } from '../controller/emloyee.controller.js';

const router = express.Router();
router.post("/addEmployee",addEmloyee)
router.get("/findEmployee",findEmployee)
export default router;