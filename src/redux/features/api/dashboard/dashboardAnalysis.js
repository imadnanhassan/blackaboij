import { getToken } from '../../../../hooks/useAuthorization'
import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'

export const dashboardAnalysisApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDashboard: builder.query({
      query: () => ({
        url: '/api/v1/admin/dashboard/analysis',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }),
      providesTags: [tagTypes.dashboardAnalysis],
    }),
  }),
})

export const { useGetDashboardQuery } = dashboardAnalysisApi
