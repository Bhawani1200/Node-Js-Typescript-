import { Request,Response } from 'express';
import productService from '../services/productService'
const getAllProducts = async (req:Request, res:Response) => {
  try {
    const products = await productService.getAllProducts(req.params);
    res.json(products);
  } catch (error:any) {
    res.status(500).send(error.message);
  }
};
export default {
    getAllProducts
}