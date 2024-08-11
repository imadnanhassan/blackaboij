import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'
let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token
export const attributeApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAttributes: builder.query({
      query: () => ({
        url: '/api/admins/attributes',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.attributes],
    }),

    addAttributes: builder.mutation({
      query: data => {
        return {
          url: '/api/admins/attributes/store',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.attributes],
    }),

    updateAttribute: builder.mutation({
      query: data => {
        return {
          url: `/api/admins/attribute-value/update/${data?.id}`,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: data.attributes,
        }
      },
      invalidatesTags: [tagTypes.attributes],
    }),

    deleteAttribute: builder.mutation({
      query: id => ({
          url: `/api/admins/attributes/delete/${id}`,
          method: 'GET',
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
          },
      }),
      invalidatesTags: [tagTypes.attributes],
  }),

    getSingleAttribute: builder.query({
      query: (id) => ({
          url: `/api/admins/attributes/show-data/${id}`,
          headers: {
              Authorization: `Bearer ${token}`,
          },
      }),
      providesTags: [tagTypes.attributes]
  }),

  }),
})

export const {
 useGetAttributesQuery,
  useAddAttributesMutation,
  useUpdateAttributeMutation,
  useGetSingleAttributeQuery,
  useDeleteAttributeMutation
} = attributeApi
