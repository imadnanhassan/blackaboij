import { baseApi } from '../baseApi/baseApi'

const getToken = () => {
  const userD = JSON.parse(localStorage?.getItem('userData'))
  return userD?.token
}

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addProduct: builder.mutation({
      query: data => ({
        url: '/api/admins/products/store',
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
        url: `/api/front/products/${id}`,
        method: 'DELETE',
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
  }),
})

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
} = productApi
