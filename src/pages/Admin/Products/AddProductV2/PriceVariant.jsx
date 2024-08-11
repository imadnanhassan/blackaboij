/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import DiscountDateRange from './DiscountDateRange'
import Select from 'react-select'
import Button from '../../../../common/Button/Button'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useGetAttributesQuery } from '../../../../redux/features/api/attribute/attributeApi'

export default function PriceVariant({ isDarkMode }) {
  const { data: attributes, isLoading } = useGetAttributesQuery()
  const [forms, setForms] = useState([])
  const [selectedValues, setSelectedValues] = useState({})
  const [discount, setDiscount] = useState('')
  const [discountType, setDiscountType] = useState(null)

  const discountOptions = [
    { value: 'flat', label: 'Flat' },
    { value: 'percent', label: 'Percent' },
  ]

  const handleButtonClick = () => {
    setForms([...forms, { id: forms.length }])
  }

  const handleRemoveForm = id => {
    setForms(forms.filter(form => form.id !== id))
    setSelectedValues(prevState => {
      const newState = { ...prevState }
      delete newState[id]
      return newState
    })
  }

  const handleSelectChange = (selectedOption, formId) => {
    setSelectedValues({
      ...selectedValues,
      [formId]: selectedOption,
    })
  }

  const generateOptions = index => {
    return (
      attributes?.attributeItems?.[index]?.attribute_values?.map(value => ({
        value: value.name,
        label: value.name,
      })) || []
    )
  }

  const sizeOptions = generateOptions(4)
  const colorOptions = generateOptions(0)
  const SleeveOption = generateOptions(2)

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <section className=" ">
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
          />
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
          />
        </div>

        <div className="mb-4 ">
          <label
            htmlFor="discountAmount"
            className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Discount Date Range
          </label>
          <DiscountDateRange />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="mb-4 w-full">
          <label
            className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            SKU
          </label>
          <input
            placeholder="SKU Name"
            className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="productName"
            className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Discount <span className="text-error-200">*</span>
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="10"
            value={discount}
            onChange={e => setDiscount(e.target.value)}
            className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
          />
        </div>
        <div className=" w-full">
          <div className=" mt-6">
            <div className="relative">
              <Select
                options={discountOptions}
                value={discountType}
                onChange={selectedOption => setDiscountType(selectedOption)}
                placeholder="Select Option"
                className="custom-select"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-5">
        <p className="text-[13px] text-gray-500 my-3">
          If you have product variant, you can select{' '}
        </p>

        <Button
          text="Add Variant"
          className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
          onClick={handleButtonClick}
          icon={FaPlus}
        ></Button>
        {forms.map(form => (
          <div
            key={form.id}
            className="grid grid-cols-3 gap-3 mt-4 relative border p-4 rounded"
          >
            <button
              onClick={() => handleRemoveForm(form.id)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            >
              <FaTimes />
            </button>
            <div className="w-full">
              <label
                htmlFor={`size-${form.id}`}
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Size
              </label>
              <div className="relative">
                <Select
                  options={sizeOptions}
                  placeholder="Select Option"
                  className="custom-select"
                  onChange={selectedOption =>
                    handleSelectChange(selectedOption, form.id)
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor={`color-${form.id}`}
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Color
              </label>
              <div className="relative">
                <Select
                  options={colorOptions}
                  placeholder="Select Option"
                  className="custom-select"
                  onChange={selectedOption =>
                    handleSelectChange(selectedOption, form.id)
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor={`campaignPhoto-${form.id}`}
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Sleeve
              </label>
              <div className="relative">
                <Select
                  options={SleeveOption}
                  placeholder="Select Option"
                  className="custom-select"
                  onChange={selectedOption =>
                    handleSelectChange(selectedOption, form.id)
                  }
                />
              </div>
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor={`discount-${form.id}`}
                className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Discount <span className="text-error-200">*</span>
              </label>
              <input
                type="text"
                id={`discount-${form.id}`}
                name={`discount-${form.id}`}
                placeholder="10"
                className={`form-control mt-2 p-[10px] border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor={`productImage-${form.id}`}
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Product Photo
              </label>
              <input
                type="file"
                id={`productImage-${form.id}`}
                name={`productImage-${form.id}`}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
