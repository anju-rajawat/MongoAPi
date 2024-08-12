import express from 'express';
import { SignIn, SignUp } from '../controller/user.controller.js';
import { Verifytoken } from '../middleware/auth.js';

const router = express.Router();
router.post("/signup",SignUp)
router.post("/signin",Verifytoken,SignIn)
export default router;