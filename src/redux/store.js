import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import checkBoxSlice from './features/checkBox/checkBoxSlice'
import themeSlice from './features/themes/themeSlice'
import cartReducer from './features/cart/cartSlice'

import { baseApi } from './features/api/baseApi/baseApi'
import { productApi } from './features/api/product/productApi'
import adminCheck from './features/api/signin/adminCheck'

export default configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    counter: counterReducer,
    checkBox: checkBoxSlice,
    theme: themeSlice,
    cart: cartReducer,
    admin: adminCheck
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, productApi.middleware),
})
