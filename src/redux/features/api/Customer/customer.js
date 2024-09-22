import { getToken } from '../../../../hooks/useAuthorization'
import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const customerApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    registerCustomer: builder.mutation({
      query: data => ({
        url: '/api/v1/front/customer/registration',
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      }),
    }),

    userLogin: builder.mutation({
      query: data => ({
        url: '/api/v1/front/customer/login',
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      }),
    }),

    getCustomerList: builder.query({
      query: () => ({
        url: '/api/v1/admin/customer/customer-lists',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          Accept: 'application/json',
        },
      }),
      providesTags: [tagTypes.customerList],
    }),
  }),
})

export const {
  useRegisterCustomerMutation,
  useUserLoginMutation,
  useGetCustomerListQuery,
} = customerApi
