import { getToken } from "../../../../hooks/useAuthorization";
import { baseApi } from "../baseApi/baseApi";




const profileUpdateApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: (data) => ({
                url: '/api/v1/front/customer/update-profile',
                method: 'POST',
                body: data,
                headers: {
                    Authorization: `Bearer ${getToken('customerToken')}`
                }
            })
        })
    })
})

export const {useUpdateProfileMutation} = profileUpdateApi;