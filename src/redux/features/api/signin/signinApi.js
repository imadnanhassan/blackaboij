import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const loginApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addLogin: builder.mutation({
      query: data => {
        return {
          url: '/api/v1/admin/auth/login',
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.login],
    }),
  }),
})

export const { useAddLoginMutation } = loginApi
