import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
  selectCartItems,
  toggleCartDrawer,
} from '../../../redux/features/cart/cartSlice'
import { baseUrl } from '../../../hooks/useThumbnailImage'

const CartDrawer = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const isCartOpen = useSelector(state => state.cart.isCartOpen)

  const handleIncrement = id => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = id => {
    dispatch(decrementQuantity(id))
  }

  const handleRemove = id => {
    dispatch(removeProduct(id))
  }

  return (
    <div
      className={`fixed z-[9999] top-0 right-0 h-full w-80 bg-white shadow-2xl transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
    >
      {/* Cart Header */}
      <div className="p-4 bg-gray-100 border-b border-gray-300 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Your Cart ({cartItems.length})
        </h2>
        <button
          onClick={() => dispatch(toggleCartDrawer())}
          className="text-gray-600 hover:text-red-600 text-2xl"
        >
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto h-[70vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center space-x-4 border-b border-gray-200 pb-4"
            >
              <img
                src={`${baseUrl}/products/${item.thumbnail_image }`}
                
                alt={item.title}
                className="w-16 h-16 object-cover rounded shadow-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-xs ">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="font-semibold text-gray-700">
                    {item.cartQuantity}
                  </span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>

      {/* Cart Footer */}
      <div className="p-4 border-t bg-gray-100">
        <p className="text-lg font-semibold text-gray-800">
          Subtotal: $
          {cartItems
            .reduce((total, item) => total + item.price * item.cartQuantity, 0)
            .toFixed(2)
          }
        </p>
        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black transition-colors duration-200">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartDrawer
