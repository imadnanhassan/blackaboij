import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa'

import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../../common/Button/Button'
import PriceVariant from './PriceVariant'
import FileMedia from './FileMedia'
import ProductSEO from './ProductSEO'
import GeneralInfo from './GeneralInfo'

export default function AddProductV2() {
  const [activeTab, setActiveTab] = useState('general')
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const handleTabClick = (e, tab) => {
    e.preventDefault()
    setActiveTab(tab)
  }

  // Breadcrumbs
  const pageTitle = 'Add Product'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Add Product' },
  ]
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <form>
        <div className=" w-full">
          <div
            className={`py-5 rounded px-24 xl:max-w-7xl mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
          >
            <div className=" flex justify-center gap-2 pb-5">
              <button
                onClick={e => handleTabClick(e, 'general')}
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
              >
                General
              </button>
              <button
                onClick={e => handleTabClick(e, 'price')}
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
              >
                Price & Stock
              </button>
              <button
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
                onClick={e => handleTabClick(e, 'file')}
              >
                File & Media
              </button>

              <button
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
                onClick={e => handleTabClick(e, 'seo')}
              >
                SEO
              </button>
            </div>
            <div className="w-full">
              <div className={`content ${activeTab !== 'general' && 'hidden'}`}>
                <GeneralInfo isDarkMode={isDarkMode} />
              </div>

              <div className={`content ${activeTab !== 'price' && 'hidden'}`}>
                <PriceVariant isDarkMode={isDarkMode} />
              </div>
              <div className={`content ${activeTab !== 'file' && 'hidden'}`}>
                <FileMedia isDarkMode={isDarkMode} />
              </div>

              <div className={`content ${activeTab !== 'seo' && 'hidden'}`}>
                <ProductSEO isDarkMode={isDarkMode} />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 items-center mt-5">
            <Button
              type="submit"
              text="Add Product"
              className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
              icon={FaPlus}
            ></Button>
            <Button
              text=" Save draft"
              className="bg-[#60a5fa] py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
            ></Button>
            <Button
              text="Discard product"
              className="bg-error-200 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
            ></Button>
          </div>
        </div>
      </form>
    </section>
  )
}
