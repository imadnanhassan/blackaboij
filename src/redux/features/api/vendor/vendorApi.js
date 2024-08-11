import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token

export const vendorApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getVendors: builder.query({
      query: () => ({
        url: '/api/admins/vendors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.vendor],
    }),

    addVendor: builder.mutation({
      query: data => {
        return {
          url: '/api/admins/vendors/store',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.vendor],
    }),

    updateVendor: builder.mutation({
      query: data => ({
        url: `/api/admins/vendors/update/${data.id}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [tagTypes.vendor],
    }),

    deleteVendor: builder.mutation({
      query: id => ({
        url: `/api/admins/vendors/delete/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [tagTypes.vendor],
    }),
  }),
})

export const {
  useGetVendorsQuery,
  useAddVendorMutation,
  useUpdateVendorMutation,
  useDeleteVendorMutation,
} = vendorApi
