import { createSlice } from "@reduxjs/toolkit";

type TCart = {
    orderId: string,
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

        addToCart: (state, action) => {
            const existingProductIndex = state.cart.findIndex(
                (item) => item.orderId === action.payload.orderId
            );

            if (existingProductIndex >= 0) {
                // Product already exists in the cart, increase the quantity
                state.cart[existingProductIndex].quantity += 1;
            } else {
                // Product does not exist in the cart, add it with quantity 1
                state.cart.push({ ...action.payload, quantity: 1 });
            }
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