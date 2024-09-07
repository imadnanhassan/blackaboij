import { baseApi } from '../baseApi/baseApi'

const getToken = () => {
  const userD = JSON.parse(localStorage?.getItem('userData'))
  return userD?.token
}

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addProduct: builder.mutation({
      query: data => ({
        url: '/api/v1/admin/product/add',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, product }) => ({
        url: `/api/front/products/${id}`,
        method: 'PUT',
        body: product,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),

    deleteProduct: builder.mutation({
      query: id => ({
        url: `/api/v1/admin/product/delete/${id}`,
        method: 'DELETE',

        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      invalidatesTags: ['product'],
    }),

    getProductList: builder.query({
      query: () => ({
        url: '/api/v1/admin/product/all',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),

    getSingleProduct: builder.query({
      query: slug => ({
        url: `/api/front/products/${slug}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),
    getProductCategoryList: builder.query({
      query: () => ({
        url: '/api/v1/admin/product/category-lists',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),
  }),
})

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductListQuery,
  useGetSingleProductQuery,
  useGetProductCategoryListQuery,
} = productApi
