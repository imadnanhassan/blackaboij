import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'
const getToken = (token = 'adminToken') => {
  return localStorage?.getItem(token)
}
export const categoryApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addCategory: builder.mutation({
      query: data => {
        return {
          url: '/api/v1/admin/category/store',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data',
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.category],
    }),

    updateCategory: builder.mutation({
      query: data => {
        return {
          url: `/api/v1/admin/category/edit/${data?.id}`,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
          },
          body: data.category,
        }
      },
      invalidatesTags: [tagTypes.category],
    }),

    deleteCategory: builder.mutation({
      query: id => {
        return {
          url: `/api/v1/admin/category/delete/${id}`,
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
          },
        }
      },
      invalidatesTags: [tagTypes.category],
    }),

    getCategory: builder.query({
      query: () => ({
        url: '/api/v1/admin/category/all',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: [tagTypes.category],
    }),

    getSingleCategory: builder.query({
      query: slug => ({
        url: `/api/v1/front/category/${slug}`,
        headers: {
          Accept: 'application/json',
        },
      }),
      providesTags: [tagTypes.category],
    }),

    getMenuCategory: builder.query({
      query: () => ({
        url: '/api/v1/front/menu-category/get-menu',
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
  useGetMenuCategoryQuery,
} = categoryApi
