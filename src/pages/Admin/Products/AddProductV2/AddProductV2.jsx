import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { FaPlus, FaTimes } from 'react-icons/fa'

import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../../common/Button/Button'

import ReactQuill from 'react-quill'

import { useGetColorQuery } from '../../../../redux/features/api/color/colorApi'
import { useGetSizeQuery } from '../../../../redux/features/api/attribute/sizeApi'
import { Controller, useForm } from 'react-hook-form'
import {
  useAddProductMutation,
  useGetProductCategoryListQuery,
} from '../../../../redux/features/api/product/productApi'

export default function AddProductV2() {
  // const [description, setDescription] = useState('')
  const [metaKeywords, setMetaKeywords] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data: color } = useGetColorQuery()
  const { data: size } = useGetSizeQuery()
  const { data: categories } = useGetProductCategoryListQuery()

  console.log(categories)

  // all category
  const categoryList = categories?.categories ?? []
  const toggleCategory = id => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id],
    )
  }

  // all size
  const sizeData = size?.sizes || []
  const toggleSize = id => {
    setSelectedSizes(prev =>
      prev.includes(id) ? prev.filter(sizeId => sizeId !== id) : [...prev, id],
    )
  }

  // all colors
  const colordata = color?.colors || []
  console.log(colordata)
  const toggleColor = id => {
    setSelectedColors(prev =>
      prev.includes(id)
        ? prev.filter(colorId => colorId !== id)
        : [...prev, id],
    )
  }

  // add product
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const [submitProduct] = useAddProductMutation()

  const onSubmit = async data => {
    try {
      // Process gallery images
      const galleryImages = Array.from(data.galleryImages).map(file => {
        return { name: file.name, type: file.type, size: file.size }
      })

      // Process thumbnail image
      const thumbnailImage = {
        name: data.thumbnailImage[0].name,
        type: data.thumbnailImage[0].type,
        size: data.thumbnailImage[0].size,
      }

      // Prepare the final data to send to the API
      const productData = {
        title: data.title,
        mainCategory: data.mainCategory,
        subCategory: data.subCategory,
        description: data.description,
        unitPrice: data.unitPrice,
        quantity: data.quantity || null,
        discount: data.discount || null,
        hasVariants: data.hasVariants || false,
        variantSize: data.variantSize || null,
        variantColor: data.variantColor || null,
        galleryImages,
        thumbnailImage,
        metaTitle: data.metaTitle || '',
        metaDescription: data.metaDescription || '',
        metaKeywords: metaKeywords || '',
      }

      // Submit the product data
      await submitProduct(productData)

      alert('Product added successfully!')
    } catch (error) {
      console.error('Error adding product:', error)
      alert('Failed to add product.')
    }
  }

  // const handleDescriptionChange = value => {
  //   setDescription(value)
  // }

  const handleAddMetaKeyword = () => {
    const keyword = document.getElementById('newMetaKeyword').value.trim()
    if (keyword && !metaKeywords.includes(keyword)) {
      setMetaKeywords([...metaKeywords, keyword])
      document.getElementById('newMetaKeyword').value = ''
    }
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full">
          <div
            className={`py-5 rounded px-24 xl:max-w-7xl mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
          >
            {/* info */}
            <div>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  {...register('title', { required: true })}
                  placeholder="Enter product name"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
                {errors.title && <span>This field is required</span>}
              </div>

              <div className="p-4 border rounded-lg shadow-sm bg-white">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Categories</h3>
                </div>

                <div className="mb-4 border-b border-gray-200">
                  <ul className="flex space-x-4 text-sm font-medium">
                    <li className="cursor-pointer text-blue-600 border-b-2 border-blue-600">
                      All Categories
                    </li>
                  </ul>
                </div>

                <div className="max-h-40 overflow-y-auto">
                  <ul className="space-y-2">
                    {categoryList.length > 0 ? (
                      categoryList.map(category => (
                        <li key={category.id}>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category.id)}
                              onChange={() => toggleCategory(category.id)}
                              className="form-checkbox text-blue-600 rounded"
                            />
                            <span className="text-sm text-gray-700">
                              {category.name}
                            </span>
                          </div>
                          {/* Render subcategories if they exist */}
                          {category.sub_categories?.length > 0 && (
                            <ul className="ml-6 mt-2 space-y-1">
                              {category.sub_categories.map(subCategory => (
                                <li
                                  key={subCategory.id}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(
                                      subCategory.id,
                                    )}
                                    onChange={() =>
                                      toggleCategory(subCategory.id)
                                    }
                                    className="form-checkbox text-blue-600 rounded"
                                  />
                                  <span className="text-sm text-gray-700">
                                    {subCategory.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-500">
                        No categories available
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Product Description
                </label>

                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <ReactQuill
                      theme="snow"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Enter product description here..."
                      className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
                    />
                  )}
                />
                {/* <ReactQuill
                  value={description}
                  onChange={handleDescriptionChange}
                  theme="snow"
                  className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
                /> */}
                {errors.description && <span>This field is required</span>}
              </div>
            </div>
            {/* price */}
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-5">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="productName"
                    className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Unit price <span className="text-error-200">*</span>
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="10"
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                    {...register('unitPrice', { required: true })}
                  />
                  {errors.unitPrice && <span>This field is required</span>}
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="productName"
                    className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Quantity <span className="text-error-200">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="10"
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                    {...register('quantity')}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-4 border rounded-lg shadow-sm bg-white w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Sizes</h3>
                  </div>

                  <div className="mb-4 border-b border-gray-200">
                    <ul className="flex space-x-4 text-sm font-medium">
                      <li className="cursor-pointer text-primaryColor border-b-2 border-primaryColor">
                        All Sizes
                      </li>
                    </ul>
                  </div>

                  <div className="max-h-40 overflow-y-auto">
                    <ul className="space-y-2">
                      {sizeData.length > 0 ? (
                        sizeData.map(size => (
                          <li
                            key={size.id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSizes.includes(size.id)}
                              onChange={() => toggleSize(size.id)}
                              className="form-checkbox text-primaryColor rounded"
                            />
                            <span className="text-sm text-gray-700">
                              {size.name}
                            </span>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500">
                          No sizes available
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="p-4 border rounded-lg shadow-sm bg-white w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Colors</h3>
                  </div>

                  <div className="mb-4 border-b border-gray-200">
                    <ul className="flex space-x-4 text-sm font-medium">
                      <li className="cursor-pointer text-primaryColor border-b-2 border-primaryColor">
                        All Colors
                      </li>
                    </ul>
                  </div>

                  <div className="max-h-40 overflow-y-auto">
                    <ul className="space-y-2">
                      {colordata.length > 0 ? (
                        colordata.map(color => (
                          <li
                            key={color.id}
                            className={`flex items-center space-x-2 ${
                              selectedColors.includes(color.id)
                                ? 'bg-green-100 p-2 rounded'
                                : 'bg-gray-100 p-2 rounded'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={selectedColors.includes(color.id)}
                              onChange={() => toggleColor(color.id)}
                              className="form-checkbox text-primaryColor rounded"
                            />
                            <div
                              className="w-6 h-6 rounded-full"
                              style={{ backgroundColor: color.code }}
                            ></div>
                            <div>
                              <span className="text-sm text-gray-700">
                                {color.name}
                              </span>
                            </div>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500">
                          No colors available
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* images */}
            <div>
              <h4 className="text-center py-7">Product Files & Media</h4>
              <div className="flex gap-4 ">
                <div className="mb-4 w-full">
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Gallery Images (600x600)
                  </label>
                  <input
                    type="file"
                    className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                    {...register('galleryImages', { required: true })}
                    multiple
                  />
                  {errors.galleryImages && <span>This field is required</span>}
                </div>
                <div className="mb-4 w-full">
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Thumbnail Image (300x300)
                  </label>
                  <input
                    type="file"
                    className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                    {...register('thumbnailImage', { required: true })}
                  />
                  {errors.thumbnailImage && <span>This field is required</span>}
                </div>
              </div>
            </div>

            {/* seo */}
            <div>
              <div className="mb-4">
                <label
                  for="metaTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Meta Title
                </label>
                <input
                  type="text"
                  id="metaTitle"
                  name="metaTitle"
                  placeholder="Enter meta title"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                  {...register('metaTitle')}
                />
              </div>

              <div className="mb-4">
                <label
                  for="metaKeyword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Meta Keywords
                </label>
                <div
                  id="metaKeywordContainer"
                  className="flex flex-wrap gap-2 mt-1 mb-1"
                ></div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="newMetaKeyword"
                    placeholder="Enter meta keyword"
                    className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                    {...register('metaKeywords')}
                  />
                  <Button
                    text="Add"
                    onClick={handleAddMetaKeyword}
                    className="bg-black mt-2 w-[100px] justify-center py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                  ></Button>
                  <ul>
                    {metaKeywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                      >
                        {keyword}
                        <button
                          type="button"
                          onClick={() =>
                            setMetaKeywords(
                              metaKeywords.filter((k, i) => i !== index),
                            )
                          }
                          className="ml-2 text-red-500"
                        >
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <label
                  for="metaDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  placeholder="Enter meta description"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                  {...register('metaDescription')}
                ></textarea>
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
          </div>
        </div>
      </form>
    </section>
  )
}
