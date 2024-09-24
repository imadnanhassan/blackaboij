import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import checkBoxSlice from './features/checkBox/checkBoxSlice'
import themeSlice from './features/themes/themeSlice'
import cartReducer from './features/cart/cartSlice'
import wishListReducer from './features/wishList/wishList'
import { baseApi } from './features/api/baseApi/baseApi'
import { productApi } from './features/api/product/productApi'
import adminSlice from './features/api/Auth/adminSlice'
import { thunk } from 'redux-thunk'

export default configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    counter: counterReducer,
    checkBox: checkBoxSlice,
    theme: themeSlice,
    cart: cartReducer,
    admin: adminSlice,
    wishList: wishListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      baseApi.middleware,
      productApi.middleware,
      thunk,
    ),
})
