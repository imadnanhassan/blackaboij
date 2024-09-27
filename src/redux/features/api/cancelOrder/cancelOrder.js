import { getToken } from '../../../../hooks/useAuthorization'
import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const cancelOrderApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    cancelOrder: builder.mutation({
      query: data => ({
        url: '/api/v1/front/customer/order/cancel-order',
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${getToken('customerToken')}`,
        },
      }),
      invalidatesTags: [tagTypes.cancelOrder],
    }),
  }),
})

export const { useCancelOrderMutation } = cancelOrderApi
