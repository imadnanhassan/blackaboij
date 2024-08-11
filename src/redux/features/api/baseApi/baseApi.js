import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../../../tag-types'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
})
