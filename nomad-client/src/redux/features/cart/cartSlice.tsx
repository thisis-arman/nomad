import { createSlice } from "@reduxjs/toolkit";

type TCart = {
    orderId: number,
    productName: string,
    price: number,
    quantity: number
    image: string,
}

type TInitialState = {
    cart: TCart[],
}
const initialState: TInitialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, actions) => {
            state.cart.push(actions.payload)
        },
        increaseQuantity: (state, actions) => {
            state.cart.push(actions.payload)
        },
        decreaseQuantity: (state, actions) => {
            state.cart.push(actions.payload)
        },
        removeFromCart: (state, actions) => {
            state.cart = state.cart.filter(a => a.orderId !== actions.payload)
        },
    }
})

export const { addToCart ,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;