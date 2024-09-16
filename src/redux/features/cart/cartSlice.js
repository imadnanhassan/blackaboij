import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // items: JSON.parse(localStorage.getItem('cartItems')) || [],
  items: [],
  isCartOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      const existingProduct = state.items.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.cartQuantity += 1
      } else {
        state.items.push({ ...product, cartQuantity: 1 })
      }
      state.isCartOpen = true
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload
      const existingProduct = state.items.find(item => item.id === productId)
      if (existingProduct) {
        existingProduct.cartQuantity += 1
        localStorage.setItem('cartItems', JSON.stringify(state.items))
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload
      const existingProduct = state.items.find(item => item.id === productId)
      if (existingProduct && existingProduct.cartQuantity > 1) {
        existingProduct.cartQuantity -= 1
        localStorage.setItem('cartItems', JSON.stringify(state.items))
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter(item => item.id !== productId)
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    toggleCartDrawer: state => {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  toggleCartDrawer,
} = cartSlice.actions

export const selectCartItems = state => state.cart?.items || []
export const selectIsCartOpen = state => state.cart?.isCartOpen || false

export default cartSlice.reducer
