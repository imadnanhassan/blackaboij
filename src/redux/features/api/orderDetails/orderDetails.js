import { getToken } from '../../../../hooks/useAuthorization'
import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const orderDetailsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getOrderDetails: builder.query({
      query: id => ({
        url: `/api/v1/admin/order/order-details/${id}`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      providesTags: [tagTypes.orderDetails],
    }),
  }),
})

export const { useGetOrderDetailsQuery } = orderDetailsApi
