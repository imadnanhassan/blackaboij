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
      }),
    }),
    getAdminOrderList: builder.query({
      query: status => ({
        url: `/api/v1/admin/order/order-lists?filter=${status}`,
        headers: {
          Authorization: `Bearer ${getToken('adminToken')}`,
        },
      }),
    }),
    getCustomerOrderList: builder.query({
      query: id => ({
        url: `/api/v1/front/customer/order/order-lists?customerId=${id}`,
        headers: {
          Authorization: `Bearer ${getToken('customerToken')}`,
        },
      }),
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
    }),
  }),
})

export const {
  useSubmitOrderMutation,
  useGetAdminOrderListQuery,
  useGetCustomerOrderListQuery,
  useChangeOrderStatusByAdminMutation,
} = order
