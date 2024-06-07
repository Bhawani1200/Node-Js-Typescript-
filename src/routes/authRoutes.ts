import express  from 'express'
import authController from '../controller/authController';
const router=express.Router();
router.post('/register',authController.registerUser)
router.post('/login',authController.loginUser)
export default router