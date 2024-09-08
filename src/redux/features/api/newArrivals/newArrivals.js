import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'


// const token =
//   typeof window !== 'undefined' && localStorage?.getItem('userData')
//     ? JSON.parse(localStorage.getItem('userData')).token
//     : ''

export const newArrivalsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getNewArrivals: builder.query({
      query: () => ({
        url: '/api/v1/front/product/new-arrival',
        method: 'GET',
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: [tagTypes.newArrivals],
    }),
  }),
})

export const { useGetNewArrivalsQuery } = newArrivalsApi
