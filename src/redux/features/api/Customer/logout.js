import { baseApi } from "../baseApi/baseApi";


const getToken = (token = 'adminToken') => {
    return localStorage?.getItem(token)
}

const logout = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        customerLogout: builder.query({
            query: () => ({
                url: '/api/v1/admin/admin-logout',
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            })
        })
    })
})


export const { useCustomerLogoutQuery } = logout