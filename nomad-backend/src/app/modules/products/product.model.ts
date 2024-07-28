import { model, Schema } from "mongoose";
import TProduct from "./product.interface";

const productSchema = new Schema<TProduct>({
  productName: {
    type: String,
    required: true,
    message: "Product name must be required",
  },
  ratings: {
    type: Number,
    required: true,
    message: "Ratings must be required",
  },
  price: {
    type: Number,
    required: true,
    message: "Price must be required",
  },
  category: {
    type: String,
    required: true,
    message: "Category must be required",
  },
  description: {
    type: String,
    required: true,
    message: "Description must be required",
  },
  images: {
    type: String,
    required: true,
    message: "Description must be required",
  },
  stockQuantity: {
    type: Number,
    required: true,
    message: "Quantity must be required",
  },
});

export const Product = model<TProduct>("Product", productSchema);
