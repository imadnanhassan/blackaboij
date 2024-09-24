import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishList: JSON.parse(localStorage.getItem('wishListItems')) || [],
  isCartOpen: false,
}

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const { product, colorId, sizeId } = action.payload
      const existingProduct = state.wishList.find(
        item => item.id === product.id,
      )

      if (existingProduct) {
        existingProduct.colorId = colorId
        existingProduct.sizeId = sizeId
      } else {
        state.wishList.push({ ...product, cartQuantity: 1, colorId, sizeId })
      }

      localStorage.setItem('wishListItems', JSON.stringify(state.wishList))

      state.isCartOpen = true
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        item => item.id !== action.payload.id,
      )
      localStorage.setItem('wishListItems', JSON.stringify(state.wishList))
    },
    clearWishList: state => {
      state.wishList = []
      localStorage.removeItem('wishListItems')
    },
    toggleCartOpen: state => {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const {
  addToWishList,
  removeFromWishList,
  clearWishList,
  toggleCartOpen,
} = wishListSlice.actions

export default wishListSlice.reducer
