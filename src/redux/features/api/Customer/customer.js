import { baseApi } from '../baseApi/baseApi'

const getToken = (token = 'adminToken') => {
  return localStorage?.getItem(token)
}

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
    })
  }),
})

export const { useRegisterCustomerMutation, useUserLoginMutation } = customerApi
