// import { tagTypes } from '../../../tag-types'
// import { baseApi } from '../baseApi/baseApi'

// export const categoryPdocutApi = baseApi.injectEndpoints({
//   endpoints: builder => ({
//     getSingleCategoryProduct: builder.query({
//       query: slug => ({
//         url: `/api/v1/front/category/${slug}`,
//         headers: {
//           Accept: 'application/json',
//         },
//       }),
//       providesTags: [tagTypes.categoryProduct],
//     }),
//   }),
// })
// export const { useGetSingleCategoryProductQuery } = categoryPdocutApi
