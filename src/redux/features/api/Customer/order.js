import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

const getToken = (tokenName = 'customerToken') => {
  return localStorage.getItem(tokenName) ?? null
}

const order = baseApi.injectEndpoints({
  endpoints: builder => ({
    submitOrder: builder.mutation({
      query: data => ({
        url: `/api/v1/front/customer/order/create-order`,
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        providesTags: [tagTypes.adminOrderList],
      }),
    }),
    getAdminOrderList: builder.query({
      query: (data) => ({
        url: `/api/v1/admin/order/order-lists?filter=${data.status}&page=${data.pages}&perpage-${data.perPage}`,
        headers: {
          Authorization: `Bearer ${getToken('adminToken')}`,
        },
      }),
      providesTags: [tagTypes.adminOrderList],
    }),
    getCustomerOrderList: builder.query({
      query: id => ({
        url: `/api/v1/front/customer/order/order-lists?customerId=${id}`,
        headers: {
          Authorization: `Bearer ${getToken('customerToken')}`,
        },
      }),
      providesTags: [tagTypes.adminOrderList],
    }),
    changeOrderStatusByAdmin: builder.mutation({
      query: data => ({
        url: `/api/v1/admin/order/change-order-status`,
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${getToken('adminToken')}`,
          Accept: 'application/json',
        },
      }),
      invalidatesTags: [tagTypes.adminOrderList],
    }),
  }),
})

export const {
  useSubmitOrderMutation,
  useGetAdminOrderListQuery,
  useGetCustomerOrderListQuery,
  useChangeOrderStatusByAdminMutation,
} = order
