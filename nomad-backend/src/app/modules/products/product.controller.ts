import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const result = await productServices.createProductIntoDB(req.body);

  res.json({
    status: 200,
    message: "Product created successfully",
    success: true,
    data: result,
  });
};

export const productController = {
  createProduct,
};
