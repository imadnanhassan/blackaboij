import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'


// const token =
//   typeof window !== 'undefined' && localStorage?.getItem('userData')
//     ? JSON.parse(localStorage.getItem('userData')).token
//     : ''

export const hotSaleApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    gethotSale: builder.query({
      query: () => ({
        url: '/api/v1/front/product/hot-sale/all',
        method: 'GET',
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: [tagTypes.hotSale],
    }),
  }),
})

export const { useGetHotSaleQuery } = hotSaleApi ;