import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const womenCollectionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getWomenCollection: builder.query({
      query: () => ({
        url: '/api/v1/front/collection/women-new-arrival',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }),
      providesTags: [tagTypes.womenCollection],
    }),
  }),
})

export const { useGetWomenCollectionQuery } = womenCollectionApi
