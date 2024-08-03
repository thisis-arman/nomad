import TProduct from "./product.interface";
import { Product } from "./product.model";


const createProduct = async (payload: TProduct) => {
  
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  
  const result = await Product.find()
  return result;
};

const getProductById = async (_id: string) => {
  
  const result = await Product.findById(_id);
  return result;
};

const deleteProductById = async (_id: string) => {
  const result = await Product.deleteOne({ _id });
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
};
