import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import Select from 'react-select'
import Barcode from 'react-barcode'
import { categories } from './CategoryData'

export default function GeneralInfo({ isDarkMode, register, errors }) {
  const [description, setDescription] = useState('')
  const [productName, setProductName] = useState('')
  const [isValidProductName, setIsValidProductName] = useState(true)

  const [selectedMainCategory, setSelectedMainCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null)
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null)

  const handleMainCategoryChange = e => {
    setSelectedMainCategory(e)
    setSelectedSubCategory(null)
    setSelectedSubSubCategory(null)
  }

  const handleSubCategoryChange = e => {
    setSelectedSubCategory(e)
    setSelectedSubSubCategory(null)
  }

  const handleSubSubCategoryChange = e => {
    setSelectedSubSubCategory(e)
  }

  const mainCategoryOptions = categories.map(category => ({
    value: category.id,
    label: category.name,
  }))

  const subCategoryOptions = selectedMainCategory
    ? categories
        .find(category => category.id === selectedMainCategory.value)
        .subcategories.map(subcategory => ({
          value: subcategory.id,
          label: subcategory.name,
        }))
    : []

  const subSubCategoryOptions = selectedSubCategory
    ? categories
        .find(category => category.id === selectedMainCategory.value)
        .subcategories.find(
          subcategory => subcategory.id === selectedSubCategory.value,
        )
        .subsubcategories.map(subsubcategory => ({
          value: subsubcategory.id,
          label: subsubcategory.name,
        }))
    : []

  // React Quill
  const handleDescriptionChange = value => {
    setDescription(value)
  }

  const productCategory = [
    { value: 'category', label: 'Product Category' },
    { value: 'gender', label: 'Gender' },
    { value: 'brand', label: 'Brand' },
  ]

  const handleChange = e => {
    const value = e.target.value
    setProductName(value)
    setIsValidProductName(value.trim().length > 0)
  }

  return (
    <div className="">
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
          placeholder="Enter product name"
          onChange={handleChange}
          className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
           {...register('productName', { required: 'Product name is required' })}
        />
        {errors.productName && <p>{errors.productName.message}</p>}
      </div>

      <div className="grid grid-cols-3 gap-3 my-4 ">
        <div className="w-full">
          <label
            className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Main Category
          </label>
          <div className="relative">
            <Select
              options={mainCategoryOptions}
              value={selectedMainCategory}
              onChange={handleMainCategoryChange}
              placeholder="Select Option"
              className="custom-select"
            />
          </div>
        </div>

        {selectedMainCategory && (
          <div className="w-full">
            <label
              className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Sub Category
            </label>
            <div className="relative">
              <Select
                options={subCategoryOptions}
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                placeholder="Select Option"
                className="custom-select"
              />
            </div>
          </div>
        )}

        {selectedSubCategory && (
          <div className="w-full">
            <label
              className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Sub Sub Category
            </label>
            <div className="relative">
              <Select
                options={subSubCategoryOptions}
                value={selectedSubSubCategory}
                onChange={handleSubSubCategoryChange}
                placeholder="Select Option"
                className="custom-select"
              />
            </div>
          </div>
        )}
      </div>

      <div className=" w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
        <div className="relative">
          <label
            htmlFor="productCategory"
            className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Brand
          </label>
          <Select
            id="productCategory"
            options={productCategory}
            placeholder="Select Option"
            className="custom-select"
          />
        </div>
      </div>
      {productName && isValidProductName && (
        <div className="mt-4">
          <label
            htmlFor="barcode"
            className="block text-sm font-medium text-gray-700"
          >
            Barcode
          </label>
          <div className="mt-1">
            <Barcode
              value={
                productName.length > 15 ? productName.slice(0, 15) : productName
              }
              width={1}
              height={50}
              fontSize={14}
            />
          </div>
        </div>
      )}

      <div className="mt-4">
        <label
          className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
        >
          Product Description
        </label>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          theme="snow"
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
        />
      </div>
      <div className="mt-5 border-t">
        <p className=" pt-1 text-gray-500 text-[13px] mb-2">
          <strong className="text-[14px] text-gray-800">Flash Deal</strong> (If
          you want to select this product as a flash deal, you can use it)
        </p>
        <div className="grid grid-cols-3 gap-5">
          <div className="mb-4">
            <label
              htmlFor="productName"
              className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Discount
            </label>
            <input
              type="number"
              placeholder="0.02"
              className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
            />
          </div>

          <div className=" w-full mr:auto ml:auto  mt-3 ">
            <div className="relative">
              <label
                htmlFor="productCategory"
                className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Add To Flash
              </label>
              <Select
                id="productCategory"
                options={productCategory}
                placeholder="Select Option"
                className="custom-select"
              />
            </div>
          </div>

          <div className=" w-full mr:auto ml:auto  mt-3">
            <div className="relative">
              <label
                htmlFor="productCategory"
                className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Discount Type
              </label>
              <Select
                id="productCategory"
                options={productCategory}
                placeholder="Select Option"
                className="custom-select"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
