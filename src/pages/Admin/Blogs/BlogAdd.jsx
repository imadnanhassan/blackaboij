import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'filepond/dist/filepond.min.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { GoHome } from 'react-icons/go'
import { IoIosClose } from 'react-icons/io'

import { useSelector } from 'react-redux'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import { FaPlus } from 'react-icons/fa'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import AddProductDatePicker from '../../../components/DatePicker/AddProductDatePicker'
import { CategoryOptions } from './CategoryOptions'

// Register FilePond plugins if needed
registerPlugin(/* plugins */)
export default function AddProduct() {
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const animatedComponents = makeAnimated()

  // React Quill
  const handleDescriptionChange = value => {
    setDescription(value)
  }

  // Breadcrumbs
  const pageTitle = 'Blog Add '
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Blog' },
    { title: 'Blog Add ' },
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

  // Update state with uploaded files
  const handleFileUpdate = files => {
    setUploadedFiles(files)
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
          text="Add New Post"
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
          className={`lg:w-[65%]  w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="px-5">
            <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
            <div className="mb-2">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Title"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Permalink
                </label>
                <input
                  type="text"
                  id="Permalink"
                  name="Permalink"
                  placeholder="Permalink"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Short Description
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
                Product Description
              </label>
              <ReactQuill
                value={description}
                onChange={handleDescriptionChange}
                theme="snow"
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
              />
            </div>
          </div>
        </div>

        <div className="lg:w-[35%] w-full bg-lightColor py-5 rounded">
          {/* select 2 */}
          <div className="px-9">
            <div className="lg:flex gap-3 items-center">
              <div className=" w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Ctegory
                  </label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={CategoryOptions}
                    
                  />
                </div>
              </div>
            </div>
          </div>

          {/* publish date product color */}
          <div className=" px-5 py-5">
            <div className="lg:flex gap-3 items-center px-4">
              <div className=" w-full mr:auto ml:auto">
                <label
                  for="productCategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Published Date and Time
                </label>
                <AddProductDatePicker />
              </div>
            </div>
          </div>
          {/* file upload */}

          <div className=" px-5 py-5">
            <div className="lg:flex gap-3 items-center px-4">
              <div className=" w-full mr:auto ml:auto">
                <label
                  for="productCategory"
                  className="block text-sm mb-2 font-medium text-gray-700"
                >
                  Upload a Thumbnail
                </label>
                <div className="">
                  <FilePond
                    files={uploadedFiles}
                    allowMultiple={true}
                    maxFiles={4}
                    onupdatefiles={handleFileUpdate}
                    labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                  />
                  {/* Render preview images */}
                  <div className="flex gap-2">
                    {uploadedFiles.map(file => (
                      <img
                        key={file.id}
                        src={file.source}
                        alt={file.filename}
                        style={{
                          maxWidth: '100px',
                          maxHeight: '100px',
                          margin: '5px',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* add a tag */}
          <div className="px-9">
            <div className="mb-4">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Tags
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
                      <IoIosClose className="hover:bg-error-300 bg-primaryColor text-white hover:text-white transition-all duration-300 rounded-full" />
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
      <div className="bg-lightColor py-5 rounded">Products SEO Field</div>
    </section>
  )
}
