import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MdEuroSymbol, MdOutlineDoNotDisturbOnTotalSilence } from 'react-icons/md'
import { Toaster } from 'sonner'
import { Link, useParams } from 'react-router-dom'
import '../../../assets/css/frontend.css'
import { useGetSingleProductQuery } from '../../../redux/features/api/product/productApi'
import { baseUrl } from '../../../hooks/useThumbnailImage'
import { BuyNowButton } from '../../../common/Button/Button'
import { Markup } from 'interweave'

import NotFound from '../Error/NotFound'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/features/cart/cartSlice'
import FrontLoader from '../../../common/FrontLoader/FrontLoader'
export default function SingleProductDetails() {
  const { slug } = useParams()
  const { data, isLoading } = useGetSingleProductQuery(slug)

  const [colorId, setColorId] = useState(null)
  const [sizeId, setSizeId] = useState(null)

  const dispatch = useDispatch()
  const handleAddProduct = product => {
    dispatch(addProduct({product, colorId, sizeId}))
  }

  useEffect(() => {
    setColorId(data?.colors[0].color_id)
    setSizeId(data?.sizes[0].size_id)
  },[isLoading])


  const handleColor = (id) => {
    setColorId(id)
  }
  const handleSize = (id) => {
    setSizeId(id)
  }

  if (isLoading) return <p>Loading...</p>
  if (isLoading) return <FrontLoader />
  if (data?.status == 404) {
    return <NotFound />
  }

  const product = data?.product
  const galleries = data?.galleries
  const colors = data?.colors
  const sizes = data?.sizes
  const articleContent = product?.product_description
  return (
    <section>
      <div className="">
        <Toaster />
        <div className="grid md:grid-cols-2 md:mx-[50px] md:gap-[50px] md:mt-[50px] relative z-10 ">
          {/* Product Images */}
          <div>
            <Carousel
              style={{ width: '100%', maxWidth: '500px' }}
              dynamicHeight={true}
            >
              {galleries?.map(gallery => (
                <div key={gallery.id}>
                  <img
                    src={`${baseUrl}/products/${gallery.name}`}
                    alt={`Gallery ${gallery.id}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Product Information */}
          <div>
            <h1 className="text-2xl font-bold mb-4">{product?.name}</h1>
            <p className="mb-4">
              <Markup content={articleContent} />
            </p>

            <div className="flex items-center mb-4 lg:mb-10">
              <span className="text-xl font-semibold mr-2">Price </span>
              <span className="text-2xl font-bold flex items-center">
                <MdEuroSymbol />
                {product?.price}
              </span>
            </div>

            <div className="flex lg:gap-x-10 gap-x-4">
              {/* Sizes */}
              <div className="mb-4">
                <h2 className="font-semibold text-xs mb-2">Sizes </h2>
                <div className="flex space-x-4">
                  {sizes?.map(size => (
                    <div
                      onClick={() => handleSize(size.id)}
                      key={size.id}
                      className={`text-lg px-4 border cursor-pointer hover:text-white hover:bg-black ${size.id == sizeId ? 'bg-black text-white' : ''}`}
                    >
                      {size.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-4">
                <h2 className="font-semibold text-xs mb-2">Colors</h2>
                <div className="flex space-x-2">
                  {colors?.map(color => (
                    <div
                      onClick={() => handleColor(color.id)}
                      key={color.id}
                      className={`w-8 h-8 cursor-pointer rounded-full ${color.id == colorId ? 'outline-2 outline-blue-800 outline outline-offset-2' : ''}`}
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* add to cart and add to favourite btn here */}
            <div className="grid grid-cols-2 items-center md:mt-[50px] my-[15px] md:gap-2 gap-1">
              <button
                onClick={() => handleAddProduct(product)}
                className="md:py-[14px] md:px-[20px] py-[7px] px-[5px] md:text-[14px] text-[10px]  bg-black text-white"
              >
                ADD TO CART
              </button>
              <button className="md:py-[14px] md:px-[20px] py-[7px] px-[5px] md:text-[14px] text-[10px]  bg-black text-white">
                ADD TO FAVOURITE
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-10 md:mx-[50px] md:gap-[50px] md:mt-[50px] md:mb-[100px]">
          <h2 className="text-2xl font-bold md:mb-10 mb-4 text-center">
            Recommended Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
            {data?.recomendedProducts?.map(recommendedProduct => (
              <div key={recommendedProduct.id} className=" rounded shadow-sm">
                <Link to={`/product/${recommendedProduct.slug}`}>
                  <img
                    src={`${baseUrl}/products/${recommendedProduct.thumbnail_image}`}
                    alt={recommendedProduct.name}
                  />
                </Link>
                <div className="bg-black p-3 text-white">
                  <h3 className="text-xl font-bold">
                    {recommendedProduct.name}
                  </h3>
                  <div className="flex justify-between ">
                    <span className="mt-2 font-bold flex items-center">
                      <MdEuroSymbol />
                      {recommendedProduct.price}
                    </span>
                    <div>
                      <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
