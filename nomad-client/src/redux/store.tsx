import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/products/productSlice'
import cartReducer from './features/cart/cartSlice'
import { baseApi } from "./api/baseApi";

import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

// import cartRed from './reducers'

const persistConfig = {
    key: 'cart',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)


export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        products: productReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)