import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const accessoriesCollectionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAccessories: builder.query({
      query: () => ({
        url: '/api/v1/front/collection/accessories',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }),
      providesTags: [tagTypes.accessoriesCollection],
    }),
  }),
})

export const { useGetAccessoriesQuery } = accessoriesCollectionApi
