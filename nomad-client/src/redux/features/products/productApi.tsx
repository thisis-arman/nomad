import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: (searchQuery) => {
                console.log(searchQuery);

                let searchParams;
                if (searchQuery) {
                    return searchParams = `search=${searchQuery}`
                }
                return {
                    url: `/products?${searchParams}`,
                    method: "GET",
                };
            },
        }),
        getSingleProduct: builder.query({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: "GET",
                };
            },
        }),
    })
})

export const { useGetProductsQuery,useGetSingleProductQuery } = productApi;