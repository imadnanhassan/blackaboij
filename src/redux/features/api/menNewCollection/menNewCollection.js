import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const menCollectionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMenCollection: builder.query({
      query: () => ({
        url: '/api/v1/front/product/new-arrival/all',
        method: 'GET',
      }),
      providesTags: [tagTypes.menCollection],
    }),
  }),
})

export const { useGetMenCollectionQuery } = menCollectionApi
