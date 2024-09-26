import { tagTypes } from "../../../tag-types";
import { baseApi } from "../baseApi/baseApi";


  export const subCategorySearchProducts = baseApi.injectEndpoints({
    endpoints: builder => ({
      getsearchCategoryApi: builder.query({
        query: (category_id) => ({
          url: `/api/v1/front/product/data/search?filter=${category_id}`,
          method: 'GET',
          headers: { Accept: 'application/json' },
        }),
        providesTags: [tagTypes.searchProduct],
      }),
    }),
  });
  
  export const { useGetsearchCategoryApiQuery } = subCategorySearchProducts;

