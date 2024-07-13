import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
    productName: string,
    price: number,
    stockQuantity: number,
    description: string,
    image: string,
    category: string,
    rating: number,
}

type TInitialState = {
    products: TProduct[],
}
const initialState: TInitialState = {
    products: []
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        addProducts: (state, actions) => {
            state.products.push(actions.payload)
        }
    }
})

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;