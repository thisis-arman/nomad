import { createSlice } from "@reduxjs/toolkit";

// type TProduct = {
//     productName: string,
//     price: number,
//     stockQuantity: number,
//     description: string,
//     image: string,
//     category: string,
//     rating: number,
// }

// type TInitialState = {
//     products: TProduct[],
// }
const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, actions) => {
            state.cart.push(actions.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;