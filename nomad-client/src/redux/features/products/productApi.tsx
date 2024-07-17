import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: (searchQuery) => {
                // console.log(searchQuery);

                // let searchParams;
                // if (searchQuery) {
                //     return searchParams = `search=${searchQuery}`
                // }
                return {
                    url: `/products?search=${searchQuery}`,
                    method: "GET",
                };
            },
        }),
        getAllProducts: builder.query({
            query: () => {
                return {
                    url: `/get-products`,
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
        getProductByCategory: builder.query({
            query: (category) => {
                return {
                    url: `/product-by-category?category=${category}`,
                    method: "GET",
                };
            },
        }),
        getProductByCategoryParams: builder.query({
            query: (category) => {
                return {
                    url: `/get-products/${category}`,
                    method: "GET",
                };
            },
        }),
    })
})

export const { useGetAllProductsQuery, useGetProductsQuery, useGetSingleProductQuery, useGetProductByCategoryQuery ,useGetProductByCategoryParamsQuery} = productApi;