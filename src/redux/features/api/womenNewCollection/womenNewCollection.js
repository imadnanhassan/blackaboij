import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const womenCollectionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getWomenCollection: builder.query({
      query: () => ({
        url: '/api/v1/front/product/new-arrival/all',
        method: 'GET',
      }),
      providesTags: [tagTypes.womenCollection],
    }),
  }),
})

export const { useGetWomenCollectionQuery } = womenCollectionApi
