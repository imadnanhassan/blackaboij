import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import checkBoxSlice from './features/checkBox/checkBoxSlice'
import themeSlice from './features/themes/themeSlice'

import { baseApi } from './features/api/baseApi/baseApi'
import { productApi } from './features/api/product/productApi'

export default configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    counter: counterReducer,
    checkBox: checkBoxSlice,
    theme: themeSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, productApi.middleware),
})
