import { Types } from "mongoose"



export type TPayment = {
    product: Types.ObjectId;
    quantity: number;
    amount: number;
    
}