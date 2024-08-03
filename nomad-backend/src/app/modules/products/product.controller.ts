import { Request, Response } from "express";
import { productService } from "./product.service";
import TProduct from "./product.interface";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productInfo: TProduct = req.body;
    const result = await productService.createProduct(productInfo);
    res.json({
      success: true,
      message: "Product added successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProducts();
    res.json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await productService.getProductById(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: "Product retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the product",
      error: error.message,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await productService.deleteProductById(id);
    if (result.deletedCount === 1) {
      res.json({
        success: true,
        message: "Product has been deleted",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the product",
      error: error.message,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
};
