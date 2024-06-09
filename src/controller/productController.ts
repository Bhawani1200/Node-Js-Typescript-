import { Request, Response } from "express";
import productService from "../services/productService";
import { Error } from "@/types/error";
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts(req.body);
    res.json(products);
  } catch (err) {
    //type casting
    const error: Error = err as unknown as Error;
    res.status(500).send(error.message);
  }
};
const createProduct = (req:Request, res:Response) => {
  try {
    const product = productService.createProduct(req.body);
    console.log(product)

    res.status(201).json(product);
    return product;
  } catch (err) {
    const error:Error=err as unknown as Error;
    res.status(500).send(error.message);
  }
};
const deleteProduct = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const product = await productService.deleteProduct(req.body);
    if (!product) res.status(404).send("product not found");
    res.send(`product deleted :${id}`);
  } catch (err) {
    const error:Error=err as unknown as Error
    res.status(500).send(error.message);
  }
};
export default {
  getAllProducts,
  createProduct,
  deleteProduct
};
