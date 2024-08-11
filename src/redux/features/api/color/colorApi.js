import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token

export const colorApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addColor: builder.mutation({
      query: data => ({
        url: '/api/colors/store',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
        body: data,
      }),
      invalidatesTags: [tagTypes.color],
    }),

    updateColor: builder.mutation({
      query: data => ({
        url: `/api/admins/colors/update/${data?.id}`,
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
        url: `/api/admins/colors/delete/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [tagTypes.color],
    }),

    getColor: builder.query({
      query: () => ({
        url: '/api/admins/colors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.color],
    }),

    getSingleColor: builder.query({
      query: id => ({
        url: `/api/admins/colors/show-data/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.color],
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
