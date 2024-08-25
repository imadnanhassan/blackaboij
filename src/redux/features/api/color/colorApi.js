import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token

export const colorApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addColor: builder.mutation({
      query: data => ({
        url: '/api/v1/admin/color/store',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [tagTypes.color],
    }),

    updateColor: builder.mutation({
      query: data => ({
        url: `/api/v1/admin/color/update/${data?.id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data.color,
      }),
      invalidatesTags: [tagTypes.color],
    }),

    deleteColor: builder.mutation({
      query: id => ({
        url: `/api/v1/admin/color/delete/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: [tagTypes.color],
    }),

    getColor: builder.query({
      query: () => ({
        url: '/api/v1/admin/color/all',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.color],
    }),

    getSingleColor: builder.query({
      query: id => ({
        url: `/api/v1/admin/color/edit/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [tagTypes.color],
    }),
  }),
})

export const {
  useGetColorQuery,
  useAddColorMutation,
  useDeleteColorMutation,
  useGetSingleColorQuery,
  useUpdateColorMutation,
} = colorApi
