import { tagTypes } from "../../../tag-types";
import { baseApi } from "../baseApi/baseApi";



export const searchProductApi = baseApi.injectEndpoints({
    endpoints: builder => ({
      getSearchProduct: builder.query({
        query: (search_query) => ({
          url: `/api/v1/front/product/data/search?search=${search_query}`,
          method: 'GET',
          headers: { Accept: 'application/json' },
        }),
        providesTags: [tagTypes.searchProduct],
      }),
    }),
  });
  
  export const { useGetSearchProductQuery } = searchProductApi;
  