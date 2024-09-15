import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

const getToken = () => {
  const userD = JSON.parse(localStorage?.getItem('userData'))
  return userD?.token
}

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addProduct: builder.mutation({
      query: data => ({
        url: '/api/v1/admin/product/store',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
      }),
      invalidatesTags: [tagTypes.product],
    }),

    // updateProduct: builder.mutation({
    //   query: ({ id, product }) => ({
    //     url: `/api/front/products/${id}`,
    //     method: 'PUT',
    //     body: product,
    //     headers: {
    //       Authorization: `Bearer ${getToken()}`,
    //     },
    //   }),
    // }),

    deleteProduct: builder.mutation({
      query: id => ({
        url: `/api/v1/admin/product/delete/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [tagTypes.product],
    }),

    getProductList: builder.query({
      query: ({page, perpage}) => ({
        url: `/api/v1/admin/product/all?page=${page}&perpage=${perpage}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),
    editProduct: builder.query({
      query: (id) => ({
        url: `/api/v1/admin/product/edit/${id}`,
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: '/api/v1/admin/product/update',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          Accept: 'application/json'
        }
      })
    }),
    deleteProductGalleryImage: builder.mutation({
      query: (id) => ({
        url: `/api/v1/admin/product/gallery-image/delete/${id}`,
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${getToken()}`
        }
      })
    }),
    getSingleProduct: builder.query({
      query: slug => ({
        url: `/api/v1/front/product/${slug}`,
        headers: {
          Accept: `application/json`,
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
  useEditProductQuery,
  useDeleteProductGalleryImageMutation
} = productApi
