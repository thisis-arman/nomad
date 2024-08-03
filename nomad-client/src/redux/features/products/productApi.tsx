import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addProducts: builder.mutation({
            query: (productInfo) => {
                return {
                    url: "/products/add-product",
                    method: "POST",
                    body: productInfo
                }
            },
            invalidatesTags: ['products'],

        }),
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
            providesTags:['products']
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

        deleteProducts: builder.mutation({
            query: (_id) => {
                return {
                    url: `/products/${_id}`,
                    method: "POST",
                }
            },
            invalidatesTags: ['products'],
        })
    })
})

export const {useAddProductsMutation,useDeleteProductsMutation, useGetAllProductsQuery, useGetProductsQuery, useGetSingleProductQuery, useGetProductByCategoryQuery, useGetProductByCategoryParamsQuery } = productApi;