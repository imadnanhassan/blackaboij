import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token

export const brandApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addBrand: builder.mutation({
      query: data => ({
        url: '/api/admins/brands/store',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          enctype: 'multipart/form-data',
        },
        body: data,
      }),
      invalidatesTags: [tagTypes.brand],
    }),

    updateBrand: builder.mutation({
      query: data => ({
        url: `/api/admins/brands/update/${data?.id}`,
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
        url: `/api/admins/brands/delete/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [tagTypes.brand],
    }),

    getBrand: builder.query({
      query: () => ({
        url: '/api/admins/brands',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.brand],
    }),

    getSingleBrand: builder.query({
      query: id => ({
        url: `/api/admins/brands/show-data/${id}`,
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
