import { baseApi } from "../baseApi/baseApi";

const getToken = (tokenName = 'customerToken') => {
    return localStorage.getItem(tokenName) ?? null
}


const order = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitOrder: builder.mutation({
            query: (data) => ({
                url: `/api/v1/customer/order/create-order`,
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            })
        })
    })
})