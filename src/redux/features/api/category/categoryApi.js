import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'
let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token
export const categoryApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addCategory: builder.mutation({
      query: data => {
        return {
          url: '/api/admins/categories/store',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.category],
    }),

    updateCategory: builder.mutation({
      query: data => {
        return {
          url: `/api/admins/categories/${data?.id}`,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: data.category,
        }
      },
      invalidatesTags: [tagTypes.category],
    }),

    deleteCategory: builder.mutation({
      query: slug => {
        return {
          url: `/api/admins/categories/delete/${slug}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      },
      invalidatesTags: [tagTypes.category],
    }),

    getCategory: builder.query({
      query: () => ({
        url: '/api/front/categories',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.category],
    }),

    getSingleCategory: builder.query({
      query: slug => ({
        url: `/api/front/category/${slug}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.category],
    }),
  }),
})

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery,
} = categoryApi
