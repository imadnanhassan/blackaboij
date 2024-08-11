import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    incrementQuantity: (state, action) => {
      const productId = action.payload
      const existingProductIndex = state.findIndex(
        product => product.id === productId,
      )
      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload
      const existingProductIndex = state.findIndex(
        product => product.id === productId,
      )
      if (
        existingProductIndex !== -1 &&
        state[existingProductIndex].quantity > 1
      ) {
        state[existingProductIndex].quantity -= 1
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload
      return state.filter(product => product.id !== productId)
    },
  },
})

export const { incrementQuantity, decrementQuantity, removeProduct } =
  cartSlice.actions

export default cartSlice.reducer
