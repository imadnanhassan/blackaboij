import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const menCollectionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMenCollection: builder.query({
      query: () => ({
        url: '/api/v1/front/collection/men-new-arrival',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }),
      providesTags: [tagTypes.menCollection],
    }),
  }),
})

export const { useGetMenCollectionQuery } = menCollectionApi
