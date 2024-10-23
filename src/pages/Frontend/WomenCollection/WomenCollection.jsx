import React from 'react'
import { MdEuroSymbol } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import { FaRegHeart } from 'react-icons/fa'
import { BuyNowButton } from '../../../common/Button/Button'
import { useGetWomenCollectionQuery } from '../../../redux/features/api/womenNewCollection/womenNewCollection'
import { baseUrl } from '../../../hooks/useThumbnailImage'
import FrontLoader from '../../../common/FrontLoader/FrontLoader'
import useScrollToTop from '../../../hooks/useScrollToTop'

export default function WomenCollection() {
  // scroll page to top
  useScrollToTop();
  const { data, isLoading } = useGetWomenCollectionQuery()
  console.log(data?.data)

  if (isLoading) {
    return <FrontLoader />
  }


  return (
    <div>
      <div
        className="relative md:h-[23vh] h-[20vh] flex bg-black  items-center justify-center">
        <Fade direction="up">
          <p className='text-white font-custom whitespace-nowrap text-sm md:text-xl italic '>Women New Collections</p>
        </Fade>
      </div>
      <div className="relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] mt-5 lg:mt-10 md:pb-[50px] pb-5 ">
        {data?.data.map((product, index) => (
          <div
            key={index}
            className="bg-[#B7B7B7] product-card font-custom relative"
          >
            <Link to={`/product/${product.slug}`}>
              <img
                src={`${baseUrl}/products/${product.thumbnail_image}`}
                alt=""
                className="front-img w-full object-cover"
              />
            </Link>

            <button
              style={{ fontSize: '30px' }}
              className="absolute top-2 left-2 text-white"
            >
              <FaRegHeart />
            </button>

            <button className="absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  ">
              WOMEN
            </button>

            <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
              {product.name}
            </h3>
            <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
              <div className="flex justify-center items-center">
                <MdEuroSymbol />
                {product.price}
              </div>
              <div className="">
                <BuyNowButton buttonText="Buy Now" product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <p className="md:pt-[50px] pt-5 flex justify-center md:mx-[50px] mx-[20px] mb-5 lg:mb-10">
        <AnimatedButton buttonText="SHOW ALL"></AnimatedButton>
      </p> */}
    </div>
  )
}
