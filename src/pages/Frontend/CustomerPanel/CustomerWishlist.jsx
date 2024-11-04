import CustomerHead from './CustomerHead'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../../../hooks/useThumbnailImage'
import { removeFromWishList } from '../../../redux/features/wishList/wishList'

export default function CustomerWishlist() {
  const dispatch = useDispatch()
  const wishList = useSelector(state => state.wishList.wishList)

  const handleRemoveClick = id => {
    dispatch(removeFromWishList({ id }))
  }

  console.log(wishList)

  return (
    <div>
      <CustomerHead title="Wishlist" />
      <div className="md:h-auto h-[50vh]">
        {wishList.length === 0 ? (
          <p>No items in your wish list.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white shadow rounded-md px-3 py-4 ">
            {wishList.map(product => (
              <div
                key={product.id}
                className="border rounded-md group flex flex-col flex-wrap "
              >
                <div className=" lg:w-[130px] mx-auto w-[130px] ">
                  <img
                    src={`${baseUrl}/products/${product.thumbnail_image}`}
                    alt={product.title}
                    className="w-full group-hover:scale-110 transition-all duration-500 rounded-lg p-3"
                  />
                </div>
                <div className=" px-3 py-5">
                  <div className="product_title mt-2">
                    <p className="text-[13px] text-[#041826] leading-5 font-medium group-hover:text-ftPrimaryColor duration-200 transition-all group-hover:underline">
                      {product.name.length > 30
                        ? `${product.name.slice(0, 30)}...`
                        : product.name}
                    </p>
                  </div>

                  <div>
                    <strong className="offer_price text-ftPrimaryColor text-[16px] font-bold">
                      $ {product.price}
                    </strong>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveClick(product.id)}
                  className="mt-auto bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
