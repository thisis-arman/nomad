import { baseApi } from "../../api/baseApi";



export const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCarts: builder.query({
            query: (searchQuery) => {
                return {
                    url: `/products?search=${searchQuery}`,
                    method: "GET",
                };
            },
        }),
    })
})

