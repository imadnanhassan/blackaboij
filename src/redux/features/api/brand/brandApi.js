import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

const getToken = (token = 'adminToken') => {
  return localStorage?.getItem(token)
}

export const brandApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addBrand: builder.mutation({
      query: data => ({
        url: '/api/v1/admin/brands/store',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          enctype: 'multipart/form-data',
        },
        body: data,
      }),
      invalidatesTags: [tagTypes.brand],
    }),

    updateBrand: builder.mutation({
      query: data => ({
        url: `/api/v1/admin/brands/update`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data.brand,
      }),
      invalidatesTags: [tagTypes.brand],
    }),

    deleteBrand: builder.mutation({
      query: id => ({
        url: `/api/v1/admin/brands/delete/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [tagTypes.brand],
    }),

    getBrand: builder.query({
      query: () => ({
        url: '/api/v1/admin/brands/all',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.brand],
    }),

    getSingleBrand: builder.query({
      query: id => ({
        url: `/api/v1/admin/brands/edit/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.brand],
    }),
  }),
})

export const {
  useGetBrandQuery,
  useGetSingleBrandQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} = brandApi
