import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'filepond/dist/filepond.min.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import AddProductDatePicker from '../../../components/DatePicker/AddProductDatePicker'
import { GoHome } from 'react-icons/go'
import { IoCloseCircle } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'

import { useSelector } from 'react-redux'
import { FilePond } from 'react-filepond'
import { FaPlus } from 'react-icons/fa'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import { colourOptions } from '../../../common/SelectTow/ColorVariant'

export default function AddProduct() {
  const [description, setDescription] = useState('')
  const [variants, setVariants] = useState([{ id: 1 }])
  const [tags, setTags] = useState([])
  const [inputValue, setInputValue] = useState('')

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const animatedComponents = makeAnimated()

  // addVariant
  const addVariant = () => {
    const newVariant = { id: variants.length + 1 }
    setVariants([...variants, newVariant])
  }
  const removeVariant = id => {
    const updatedVariants = variants.filter(variant => variant.id !== id)
    setVariants(updatedVariants)
  }

  // React Quill
  const handleDescriptionChange = value => {
    setDescription(value)
  }

  // Breadcrumbs
  const pageTitle = 'Add Product'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Add Product' },
  ]

  // Select 2
  const productCategory = [
    { value: 'category', label: 'Product Category' },
    { value: 'gender', label: '-Gender' },
    { value: 'brand', label: '--Male' },
    { value: 'gender', label: '-Brand' },
    { value: 'brand', label: '--Apex' },
  ]
  const genderOptions = [
    { value: 'category', label: 'Product Category' },
    { value: 'gender', label: 'Gender' },
    { value: 'brand', label: 'Brand' },
  ]
  const brandOptions = [
    { value: 'category', label: 'Product Category' },
    { value: 'gender', label: 'Gender' },
    { value: 'brand', label: 'Brand' },
  ]

  // tag
  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleRemoveTag = index => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      {/* publish btn */}
      <div className="flex justify-end gap-3 items-center mb-5">
        <Button
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
      {/* Add Product field */}
      <div className="lg:flex gap-5 pb-5">
        <div
          className={`lg:w-[50%]  w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="px-5">
            <h2 className="text-2xl font-bold mb-4">Product Information</h2>
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
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  SKU
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  placeholder="SKU"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
              <div className="flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Product ID
                </label>
                <input
                  type="text"
                  id="productId"
                  name="productId"
                  placeholder="Product ID"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Product Features
              </label>
              <textarea
                rows="4"
                className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-gray-400 border-gray-300'}`}
              ></textarea>
            </div>

            
            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Variants
              </label>
              {variants.map((variant, index) => (
                <div key={variant.id}>
                  <div className="flex items-center gap-4 mb-2">
                    <select
                      className={`form-control mt-1 p-3  border block lg:w-[45%] w-[70%] shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                    >
                      <option>Select Option</option>
                      <option>Color</option>
                      <option>Size</option>
                      <option>Weight</option>
                    </select>
                    <input
                      type="text"
                      className={`form-control mt-1 p-3  border block lg:w-[45%] w-[70%] shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                      placeholder="Enter Size"
                    />
                    {index > 0 && (
                      <IoCloseCircle
                        onClick={() => removeVariant(variant.id)}
                        className=" text-error-300 text-2xl cursor-pointer  rounded"
                      />
                    )}
                  </div>
                </div>
              ))}
              <Button
                text="Add Variants"
                onClick={addVariant}
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Product Status
                </label>
                <select
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                >
                  <option value="publish">Publish</option>
                  <option value="unpublish">Unpublish</option>
                </select>
              </div>
              <div className="flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Product Visibility
                </label>
                <select
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                >
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`lg:w-[50%]  w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* select 2 */}
          <div className="px-9">
            <div className="lg:flex gap-3 items-center">
              <div className="lg:w-[45%] w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Product Color
                  </label>
                  <Select
                    id="productCategory"
                    options={productCategory}
                    placeholder="Select Option"
                    className="custom-select" // Add custom class name
                  />
                </div>
              </div>
              <div className="lg:w-[45%] w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Product Color
                  </label>
                  <Select
                    id="genderOptions"
                    options={genderOptions}
                    placeholder="Select Option"
                    className="custom-select" // Add custom class name
                  />
                </div>
              </div>
              <div className="lg:w-[45%] w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Product Color
                  </label>
                  <Select
                    id="brandOptions"
                    options={brandOptions}
                    placeholder="Select Option"
                    className="custom-select" // Add custom class name
                  />
                </div>
              </div>
            </div>
          </div>

          {/* publish date product color */}
          <div className=" px-5 py-5">
            <div className="lg:flex gap-3 items-center px-4">
              <div className="lg:w-[60%] w-full mr:auto ml:auto">
                <label
                  for="productCategory"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Published Date and Time
                </label>
                <AddProductDatePicker />
              </div>
              <div className="lg:w-[40%] w-full mr:auto ml:auto">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Product Color
                  </label>
                  <Select
                    id="productCategory"
                    placeholder="Select Option"
                    className="custom-select"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={colourOptions}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* product price */}
          <div className="px-9">
            <div className="mb-4 lg:flex gap-4">
              <div className="lg:flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Actual Price
                </label>
                <input
                  type="text"
                  id="actualPrice"
                  name="actualPrice"
                  placeholder="$500"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
              <div className="lg:flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Dealer Price
                </label>
                <input
                  type="text"
                  id="dealerPrice"
                  name="dealerPrice"
                  placeholder="$400"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
              <div className="lg:flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Discount
                </label>
                <input
                  type="text"
                  id="discount"
                  name="discount"
                  placeholder="10%"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
            </div>
          </div>

          <div className="px-9">
            <div className="lg:flex gap-3 items-center">
              <div className="lg:w-[45%] w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Product Color
                  </label>
                  <Select
                    id="productCategory"
                    options={productCategory}
                    placeholder="Select Option"
                    className="custom-select" // Add custom class name
                  />
                </div>
              </div>
              <div className="lg:w-[45%] w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Product Color
                  </label>
                  <Select
                    id="productCategory"
                    options={productCategory}
                    placeholder="Select Option"
                    className="custom-select" // Add custom class name
                  />
                </div>
              </div>
              <div className="lg:w-[45%] w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Product Color
                  </label>
                  <Select
                    id="productCategory"
                    options={productCategory}
                    placeholder="Select Option"
                    className="custom-select" // Add custom class name
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-9 mt-4">
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Actual Price
                </label>
                <input
                  type="text"
                  id="actualPrice"
                  name="actualPrice"
                  placeholder="$500"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
              <div className="flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Dealer Price
                </label>
                <input
                  type="text"
                  id="dealerPrice"
                  name="dealerPrice"
                  placeholder="$400"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
            </div>
          </div>

          {/* file upload */}
          <div className="px-9">
            <FilePond
              files={[]}
              allowMultiple={true}
              maxFiles={3}
              server="/api/upload"
              labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
            />
          </div>

          {/* add a tag */}
          <div className="px-9">
            <div className="mb-4">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Product Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`bg-gray-200 px-3 py-1 mt-2 rounded-full inline-flex items-center ${isDarkMode ? 'text-darkColorText' : 'text-gray-800'}`}
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(index)}
                      className="ml-1 focus:outline-none"
                    >
                      <IoIosClose
                        className={`transition-all duration-300 rounded-full ${isDarkMode ? ' hover:bg-error-300 bg-primaryColor text-white hover:text-white' : 'hover:bg-error-300 bg-primaryColor text-white hover:text-white'}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Add a tag..."
                className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`py-5 px-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <h2 className="text-2xl font-bold mb-4">Product Information</h2>

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
            />
            <Button
              text="Add"
              className="bg-[#60a5fa] mt-2 w-[100px] justify-center py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
            ></Button>
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
          ></textarea>
        </div>
      </div>
    </section>
  )
}
