import { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Link } from 'react-router-dom'
import { MdEuroSymbol } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { Toaster } from 'sonner'
import { AnimatedButton, BuyNowButton } from '../../../common/Button/Button'
import '../HelperCss/home-hotsale.css'
import { HiFire } from 'react-icons/hi'
import { categories } from '../../../../data/index'
HomeJustDropped
const HomeHotSale = () => {
  return (
    <section>
      <div className="md:section-gap pt-[50px]">
        <Toaster />
        <div className="flex flex-col">
          <h1 className="mb-[10px] md:mb-[20px] text-center text-3xl font-bold">
            Hot Sale
          </h1>
          <div>
            <Tabs>
              <div className="mb-[20px] md:mb-[50px] font-custom text-center">
                <TabList className="custom-tab-list md:flex md:justify-center cursor-pointer md:text-[16px] text-[12px] md:gap-6 gap-[10px]">
                  {categories?.map((category, index) => (
                    <Tab className="custom-tab" key={index}>
                      {category.category_name}
                    </Tab>
                  ))}
                </TabList>
              </div>

              {/* here show all categorieswise data and show maximum six data for each categories  */}
              {categories?.map((category, index) => (
                <TabPanel key={index}>
                  <div className="relative grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px]">
                    {category.products.slice(0, 6).map(product => (
                      <div
                        key={product.slug}
                        className="bg-[#B7B7B7] product-card font-custom relative"
                      >
                        <Link to={`hotSale/${product.slug}`}>
                          <img
                            src={product.img}
                            alt={product.product_title}
                            className="front-img w-full object-cover"
                          />
                        </Link>
                        <Link to={`hotSale/${product.slug}`}>
                          <img
                            src={product.backImg}
                            alt={product.product_title}
                            className="absolute top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out w-full object-cover"
                          />
                        </Link>

                        <button
                          style={{ fontSize: '30px' }}
                          className="absolute top-2 left-2 text-white"
                        >
                          <FaRegHeart />
                        </button>

                        <button
                          style={{ fontSize: '30px' }}
                          className="absolute top-2 right-2 text-white "
                        >
                          <HiFire className="hover:text-red-600 transition-colors duration-700 ease-in-out" />
                        </button>

                        <h3 className="pl-2 md:pl-4 md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">
                          {product.product_title}
                        </h3>
                        <div className="md:pb-4 pb-1 px-2 md:px-4 md:text-[15px] text-[12px] bg-black text-white flex justify-between">
                          <div className="flex justify-center items-center">
                            <MdEuroSymbol /> {product.price}
                          </div>
                          <div className="">
                            <BuyNowButton buttonText="Buy Now"></BuyNowButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="md:pt-[50px] pt-5 flex justify-center md:mx-[50px] mx-[20px]">
                    <AnimatedButton buttonText="SHOW ALL"></AnimatedButton>
                  </p>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHotSale
