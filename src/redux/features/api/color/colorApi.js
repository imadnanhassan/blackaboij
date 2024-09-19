import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

const getToken = (token = 'adminToken') => {
  return localStorage?.getItem(token)
}

export const colorApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addColor: builder.mutation({
      query: data => ({
        url: '/api/v1/admin/color/store',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getToken()}`,
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
          Authorization: `Bearer ${getToken()}`,
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
          Authorization: `Bearer ${getToken()}`,
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
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: [tagTypes.color],
    }),

    getSingleColor: builder.query({
      query: id => ({
        url: `/api/v1/admin/color/edit/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
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
