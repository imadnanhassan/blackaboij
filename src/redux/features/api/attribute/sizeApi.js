import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'
let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token
export const sizeApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSize: builder.query({
      query: () => ({
        url: '/api/v1/admin/size/all',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.sizes],
    }),

    addSize: builder.mutation({
      query: data => {
        return {
          url: '/api/v1/admin/size/store',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.sizes],
    }),

    updateSize: builder.mutation({
      query: data => {
        return {
          url: `/api/v1/admin/size/edit/${data?.id}`,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: data.attributes,
        }
      },
      invalidatesTags: [tagTypes.sizes],
    }),

    deleteSize: builder.mutation({
      query: id => ({
        url: `/api/v1/admin/size/delete/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [tagTypes.sizes],
    }),

    getSingleSize: builder.query({
      query: id => ({
        url: `/api/admins/attributes/show-data/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.sizes],
    }),
  }),
})

export const {
  useGetSizeQuery,
  useAddSizeMutation,
  useUpdateSizeMutation,
  useGetSingleSizeQuery,
  useDeleteSizeMutation,
} = sizeApi
