import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token

export const unitApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        addUnit: builder.mutation({
            query: data => ({
                url: '/api/admins/units/store',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json',
                },
                body: data,
            }),
            invalidatesTags: [tagTypes.unit],
        }),

        updateunit: builder.mutation({
            query: data => ({
                url: `/api/admins/units/update/${data?.id}`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
                body: data.unit,
            }),
            invalidatesTags: [tagTypes.unit],
        }),

        deleteUnit: builder.mutation({
            query: id => ({
                url: `/api/admins/units/delete/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            }),
            invalidatesTags: [tagTypes.unit],
        }),

        getUnit: builder.query({
            query: () => ({
                url: '/api/admins/units',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: [tagTypes.unit],
        }),

        getSingleUnit: builder.query({
            query: id => ({
                url: `/api/admins/units/show-data/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: [tagTypes.unit],
        }),
    }),
})

export const {
    useGetUnitQuery,
    useAddUnitMutation,
    useDeleteUnitMutation,
    useUpdateunitMutation,
    useGetSingleUnitQuery,
} = unitApi
