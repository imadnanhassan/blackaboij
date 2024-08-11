import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token

export const languageApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addLanguage: builder.mutation({
      query: data => ({
        url: '/api/admins/languages/store',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
        body: data,
      }),
      invalidatesTags: [tagTypes.language],
    }),

    updateLanguage: builder.mutation({
      query: data => ({
        url: `/api/admins/languages/update/${data?.id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data.language,
      }),
      invalidatesTags: [tagTypes.language],
    }),

    deleteLanguage: builder.mutation({
      query: id => ({
        url: `/api/admins/languages/delete/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags: [tagTypes.language],
    }),

    getLanguage: builder.query({
      query: () => ({
        url: '/api/admins/languages',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.language],
    }),

    getSingleLanguage: builder.query({
      query: id => ({
        url: `/api/admins/languages/show-data/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.language],
    }),
  }),
})

export const {
  useGetLanguageQuery,
  useAddLanguageMutation,
  useDeleteLanguageMutation,
  useUpdateLanguageMutation,
  useGetSingleLanguageQuery,
} = languageApi
