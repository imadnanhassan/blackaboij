import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token

export const newArrivalsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getNewArrival: builder.query({
      query: () => ({
        url: '/api/v1/front/product/new-arrival',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.newArrivals],
    }),
  }),
})

export const { useGetNewArrivalsQuery } = newArrivalsApi
