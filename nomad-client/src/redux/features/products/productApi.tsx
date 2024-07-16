import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        getProducts: builder.query({
            query: (query) => ({
                url: `/products?search=${query}`,
                method: "GET",
            })
        })
    })
})

export const { useGetProductsQuery } = productApi;