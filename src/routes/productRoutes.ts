import express  from 'express'
import productController from '../controller/productController';
const router=express.Router();
router.get("/",productController.getAllProducts)
export default router