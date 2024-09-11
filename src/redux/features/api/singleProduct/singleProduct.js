import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const singleProductApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSingleProduct: builder.query({
      query: slug => ({
        url: `/api/v1/front/product/${slug}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.singleProduct],
    }),
  }),
})

export const { useGetSingleProductQuery } = singleProductApi
