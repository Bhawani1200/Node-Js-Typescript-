import Product from '../model/productModel'
const getAllProducts = async (data:any) => {
    try {
      const products = await Product.find();
      return {
        ...products,
      };
    } catch (error) {
      throw error;
    }
  };

  export default {
    getAllProducts,
  };