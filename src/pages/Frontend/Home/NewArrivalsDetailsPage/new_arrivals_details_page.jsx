import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MdEuroSymbol } from 'react-icons/md'
import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { categories } from '../../../../../data/index'
import '../../../../assets/css/frontend.css'
import CommonDetailsAccordian from '../CommonDetailsAccordian/common-details-accordian'

const NewArrivalsDetailsPage = () => {
  const { slug } = useParams()

  // Find the product by slug
  const product = categories
    .flatMap(category => category.products)
    .find(product => product.slug === slug)

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div className="">
      <Toaster />
      <div className="grid md:grid-cols-2  md:mx-[50px] md:gap-[50px] md:mt-[50px]  relative z-10  ">
        {/* show product images */}
        <div>
          <Carousel
            style={{ width: '100%', maxWidth: '500px' }}
            dynamicHeight={true}
          >
            <div>
              <img src={product?.img} />
            </div>
            <div>
              <img src={product?.backImg} />
            </div>
          </Carousel>
        </div>

        <div className="px-[20px] md:px-[0px]">
          {/* breadcumbs */}
          <p className="text-[14px] text-[#212121]">
            Home . {product.product_title}
          </p>

          {/* product contents here */}
          <h2 className="md:my-[20px] md:text-[39px] my-[5px] text-[20px] text-[#212121] ">
            {product.product_title}
          </h2>
          <p className="text-[14px] mb-4 md:mb-5 md:text-lg  text-[#212121]">
            {product.description}
          </p>
          <h2>
            <span className="flex  items-center md:text-[23px] md:mb-5 mb-2  text-[16px]">
              <MdEuroSymbol /> {product.price}
            </span>
          </h2>
          <div className="md:pt-2 space-x-3">
            {product.size.map((size, index) => (
              <button
                key={index}
                className={`size-button bg-gray-500 text-white`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="md:pt-3 pt-2 md:space-x-[7px] md:flex-none flex    space-x-[2px]">
            {product.color.map((color, index) => (
              <button
                key={index}
                className={`size-button 'bg-gray-500 text-white`}
              >
                {color}
              </button>
            ))}
          </div>

          {/* add to cart and add to favourite btn here */}
          <div className="grid grid-cols-2 items-center md:my-[30px] my-[15px] md:gap-2 gap-1">
            <button
              className={` md:py-[14px] md:px-[20px] py-[7px] px-[5px] md:text-[14px] text-[10px]  bg-black text-white`}
            >
              ADD TO CART
            </button>
            <button
              className={` md:py-[14px] md:px-[20px] py-[7px] px-[5px] md:text-[14px] text-[10px]  bg-black text-white`}
            >
              ADD TO FAVOURITE
            </button>
          </div>

          {/* common accordian for every page */}
          <div className=" ml-0 ">
            <CommonDetailsAccordian></CommonDetailsAccordian>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivalsDetailsPage
