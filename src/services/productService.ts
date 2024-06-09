import { CreateAllProduct, GetallProductInput, deleteAllProduct } from '@/types/products';
import Product from '../model/productModel'
const getAllProducts = async (data:GetallProductInput) => {
    try {
      const products = await Product.find();
      return {
        ...products,
      };
    } catch (error) {
      throw error;
    }
  };
  const createProduct = async (data:CreateAllProduct) => {
    try {
      return await Product.create(data);
    } catch (error) {
      throw error;
    }
  }
  const deleteProduct = async (id:deleteAllProduct) => {
    try {
      return await Product.findOneAndDelete(id);
    } catch (error) {
      throw error;
    }
  };
  export default {
    getAllProducts,
    createProduct,
    deleteProduct

  };