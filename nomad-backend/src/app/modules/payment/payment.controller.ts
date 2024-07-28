import { Request, Response } from "express";

const createPayment = async (req: Request, res: Response) => {
  const result = await paymentServices.createPaymentIntoDB(req.body);

  res.json({
    status: 200,
    message: "Payment created successfully",
    success: true,
    data: result,
  });
};

export const paymentController = {
  createPayment,
};
