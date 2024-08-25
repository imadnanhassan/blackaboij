import React, { useState } from 'react'
import images from '../../../assets/img/images'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import CustomerHead from './CustomerHead'

const wishlistProduct = [
  {
    id: 1,
    product_id: 'P001',
    name: 'Product 1',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 49.99,
    old_price: 59.99,
    save_percentage: 17,
    shipping_optimize: true,
    free_shipping: false,
    image: images.flashproduct1,
    rating: 4.5,
  },
  {
    id: 2,
    product_id: 'P002',
    name: 'Product 2',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 29.99,
    old_price: 39.99,
    save_percentage: 25,
    shipping_optimize: true,
    free_shipping: true,
    image: images.flashproduct2,
    rating: 3.5,
  },
  {
    id: 3,
    product_id: 'P003',
    name: 'Product 3',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 79.99,
    old_price: 89.99,
    save_percentage: 11,
    shipping_optimize: true,
    free_shipping: false,
    image: images.flashproduct3,
    rating: 5,
  },
  {
    id: 4,
    product_id: 'P004',
    name: 'Product 4',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 99.99,
    old_price: 119.99,
    save_percentage: 17,
    shipping_optimize: false,
    free_shipping: false,
    image: images.flashproduct4,
    rating: 4.5,
  },
  {
    id: 5,
    product_id: 'P005',
    name: 'Product 5',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 39.99,
    old_price: 49.99,
    save_percentage: 20,
    shipping_optimize: true,
    free_shipping: true,
    image: images.flashproduct5,
    rating: 5,
  },
  {
    id: 6,
    product_id: 'P006',
    name: 'Product 6',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 149.99,
    old_price: 169.99,
    save_percentage: 12,
    shipping_optimize: true,
    free_shipping: false,
    image: images.flashproduct6,
    rating: 5,
  },
  {
    id: 7,
    product_id: 'P007',
    name: 'Product 7',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 59.99,
    old_price: 69.99,
    save_percentage: 14,
    shipping_optimize: false,
    free_shipping: true,
    image: images.flashproduct1,
    rating: 5,
  },
  {
    id: 8,
    product_id: 'P008',
    name: 'Product 8',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 69.99,
    old_price: 79.99,
    save_percentage: 13,
    shipping_optimize: true,
    free_shipping: true,
    image: images.flashproduct1,
    rating: 4.5,
  },
  {
    id: 9,
    product_id: 'P009',
    name: 'Product 9',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 19.99,
    old_price: 29.99,
    save_percentage: 33,
    shipping_optimize: false,
    free_shipping: false,
    image: images.flashproduct1,
    rating: 5,
  },
  {
    id: 10,
    product_id: 'P010',
    name: 'Product 10',
    title:
      'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
    price: 119.99,
    old_price: 139.99,
    save_percentage: 14,
    shipping_optimize: true,
    free_shipping: false,
    image: images.flashproduct1,
    rating: 4.5,
  },
]
export default function CustomerWishlist() {
  const [products, setProducts] = useState(wishlistProduct)

  const handleRemove = id => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div>
      <CustomerHead title="Wishlist" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white shadow rounded-md px-3 py-4 ">
        {wishlistProduct.map(product => (
          <div
            key={product.id}
            className="border rounded-md group flex flex-col flex-wrap "
          >
            <div className=" lg:w-[130px] mx-auto w-[130px] ">
              <img
                src={product.image}
                alt={product.title}
                className="w-full group-hover:scale-110 transition-all duration-500 rounded-lg p-3"
              />
            </div>
            <div className=" px-3 py-5">
              <div className="product_rating flex">
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellowColor" />
                ))}
                {product.rating % 1 >= 0.5 && (
                  <FaStarHalfAlt className="text-yellowColor" />
                )}
              </div>
              <div className="product_title mt-2">
                <p className="text-[13px] text-[#041826] leading-5 font-medium group-hover:text-ftPrimaryColor duration-200 transition-all group-hover:underline">
                  {product.title.length > 30
                    ? `${product.title.slice(0, 30)}...`
                    : product.title}
                </p>
              </div>

              <div className="flash_shipping">
                <p
                  className={`text-[#041826] uppercase text-[10px] mt-3 font-semibold ${product.free_shipping ? 'border border-ftPrimaryColor px-2 w-[108px]' : ''}`}
                >
                  {product.free_shipping ? 'Free Shipping' : ''}
                </p>
              </div>

              <div
                className={`product_price_inner flex items-center gap-2 ${product.free_shipping ? 'py-2' : 'py-0'}`}
              >
                <strong className="offer_price text-ftPrimaryColor text-[16px] font-bold">
                  ৳ {product.price}
                </strong>
                <span className="old_price line-through text-[14px] text-[#0f172a99] font-medium">
                  ৳ {product.old_price}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleRemove(product.id)}
              className="mt-auto bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
