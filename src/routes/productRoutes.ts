import express  from 'express'
import productController from '../controller/productController';
const router=express.Router();
router.get("/",productController.getAllProducts)
router.post("/",productController.createProduct)
router.delete("/:id",productController.deleteProduct)
export default router