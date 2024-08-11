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
import { useAddProductMutation } from '../../../../redux/features/api/product/productApi'
import { useForm } from 'react-hook-form'

export default function AddProductV2() {
  const [activeTab, setActiveTab] = useState('general')
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [addProduct, { isLoading }] = useAddProductMutation()

  const [submissionError, setSubmissionError] = useState(null)

  const onSubmit = async data => {
    const formData = new FormData()

    Object.keys(data).forEach(key => {
      if (key === 'thumbnailImage') {
        formData.append(key, data[key][0])
      } else if (key === 'galleryImages') {
        Array.from(data[key]).forEach(file => formData.append(key, file))
      } else {
        formData.append(key, data[key])
      }
    })

    try {
      await addProduct(formData).unwrap()
      console.log('Product added successfully!')
      reset()
      setSubmissionError(null)
    } catch (err) {
      console.error('Failed to add product:', err)
      setSubmissionError('Failed to add product. Please try again.')
    }
  }

  // Breadcrumbs
  const pageTitle = 'Add Product'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Add Product' },
  ]

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full">
          <div
            className={`py-5 rounded px-24 xl:max-w-7xl mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
          >
            <div className=" flex justify-center gap-2 pb-5">
              <button
                onClick={() => handleTabClick('general')}
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
              >
                General
              </button>
              <button
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
                onClick={() => handleTabClick('price')}
              >
                Price & Stock
              </button>
              <button
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
                onClick={() => handleTabClick('file')}
              >
                File & Media
              </button>

              <button
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px]  items-center"
                onClick={() => handleTabClick('seo')}
              >
                SEO
              </button>
            </div>
            <div className="w-full">
              <div className={`content ${activeTab !== 'general' && 'hidden'}`}>
                <GeneralInfo
                  isDarkMode={isDarkMode}
                  register={register}
                  errors={errors}
                />
              </div>

              <div className={`content ${activeTab !== 'price' && 'hidden'}`}>
                <PriceVariant
                  isDarkMode={isDarkMode}
                  register={register}
                  errors={errors}
                />
              </div>
              <div className={`content ${activeTab !== 'file' && 'hidden'}`}>
                <FileMedia
                  isDarkMode={isDarkMode}
                  register={register}
                  errors={errors}
                />
              </div>

              <div className={`content ${activeTab !== 'seo' && 'hidden'}`}>
                <ProductSEO isDarkMode={isDarkMode} register={register} />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 items-center mt-5">
            <Button
              type="submit"
              disabled={isLoading}
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

        {submissionError && (
          <div className="mt-5 text-red-500">{submissionError}</div>
        )}
      </form>
    </section>
  )
}
