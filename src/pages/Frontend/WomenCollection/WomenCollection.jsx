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
import { mainUrl } from '../../../hooks/useMainUrl'
import { Helmet } from 'react-helmet-async'

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
      <Helmet>
        <title>Blackaboij – Women Collection</title>
        <link rel="canonical" href={mainUrl} />

        <meta
          name="description"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Blackaboij" />
        {/* facebook / whatsapp  */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={mainUrl} />
        <meta
          property="og:title"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta
          property="og:description"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta property="og:url" content={mainUrl} />
        <meta
          property="og:site_name"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta property="og:image" content="https://i.ibb.co/3sNL27c/logo.png" />
        <meta
          property="og:image:alt"
          content="https://i.ibb.co/3sNL27c/logo.png"
        />
        <meta
          property="og:site_name"
          content="https://i.ibb.co/3sNL27c/logo.png"
        />
        {/* twitter  */}
        <meta
          name="twitter:title"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta
          name="twitter: description"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />

        <meta name="theme-color" content="#000" />
      </Helmet>
      <div className="relative md:h-[23vh] h-[20vh] flex bg-black  items-center justify-center">
        <Fade direction="up">
          <p className="text-white font-custom whitespace-nowrap text-sm md:text-xl italic ">
            Women New Collections
          </p>
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
    </div>
  )
}
