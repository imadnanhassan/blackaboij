import { getToken } from '../../../../hooks/useAuthorization'
import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'
// let userD = JSON.parse(localStorage?.getItem('userData'))

export const sizeApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSize: builder.query({
      query: () => ({
        url: '/api/v1/admin/size/all',
        headers: {
          Authorization: `Bearer ${getToken()}`,
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
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'application/json',
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.sizes],
    }),

    // updateSize: builder.mutation({
    //   query: data => {
    //     return {
    //       url: `/api/v1/admin/size/edit/${data?.id}`,
    //       method: 'PUT',
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //       },
    //       body: data.attributes,
    //     }
    //   },
    //   invalidatesTags: [tagTypes.sizes],
    // }),

    deleteSize: builder.mutation({
      query: id => ({
        url: `/api/v1/admin/size/delete/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [tagTypes.sizes],
    }),

    getSingleSize: builder.query({
      query: id => ({
        url: `/api/v1/admin/size/edit/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'multipart/form-data',
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
