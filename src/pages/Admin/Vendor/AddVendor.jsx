import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import { GoHome } from 'react-icons/go'
import Button from '../../../common/Button/Button'
import { FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa'
import ReactQuill from 'react-quill'
import { useAddVendorMutation } from '../../../redux/features/api/vendor/vendorApi'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function AddVendor() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [description, setDescription] = useState('')
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const [addVendor, { isLoading }] = useAddVendorMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = async data => {
    console.log('Form Data:', data)
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('shop_name', data.slug)
    formData.append('email', data.email)
    formData.append('commission', data.commission)
    formData.append('password', data.password)
    formData.append('address', data.address)
    formData.append('bank_information', data.bank_info)
    formData.append('description', description)
    formData.append('shop_profile_image', data.profilePhoto[0])
    formData.append('shop_cover_photo', data.coverPhoto[0])
    try {
      const vendorInfo = await addVendor(formData).unwrap()
      console.log('Vendor info:', vendorInfo)
      toast.success('Vendor added successfully!')
      reset()
    } catch (error) {
      toast.error('Failed to add vendor. Please try again.')
      console.error('Failed to add vendor', error)
    }
  }
  const handleDiscard = () => {
    reset()
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  // React Quill
  const handleDescriptionChange = value => {
    setDescription(value)
  }

  const pageTitle = 'Create Vendor'
  const vendorLink = [
    { title: <GoHome />, link: '/' },
    { title: 'Vendor' },
    { title: 'New Vendor' },
  ]

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={vendorLink} />

      <div
        className={`py-5 rounded xl:w-[1200px] lg:w-[950px] md:w-[750px] sm:w-[750] w-full mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <h2 className="text-2xl font-bold mb-4">Vendor Add Information</h2>
          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="vendorName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Vendor Name <span className="text-error-200">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Vendor Name"
                {...register('name')}
                required
                className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
              />
              {errors.name && (
                <p className="text-error-200 mt-1 font-extralight">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="shopName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Shop Name <span className="text-error-200">*</span>
              </label>
              <input
                type="text"
                name="slug"
                placeholder="Shop Name"
                {...register('slug')}
                required
                className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
              />
              {errors.slug && (
                <p className="text-error-200 mt-1 font-extralight">
                  {errors.slug.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="phoneNumber"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Phone Number <span className="text-error-200">*</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                {...register('phone')}
                className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
              />
              {errors.phone && (
                <p className="text-error-200 mt-1 font-extralight">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="emailAddress"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Email Address <span className="text-error-200">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                {...register('email')}
                className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
              />
              {errors.email && (
                <p className="text-error-200 mt-1 font-extralight">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="commission"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Commission
              </label>
              <input
                type="number"
                name="commission"
                placeholder="Commission"
                {...register('commission')}
                className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Password <span className="text-error-200">*</span>
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  {...register('password')}
                  required
                  className={`form-control mt-1 p-3 pr-10 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <p className="text-error-200 mt-1 font-extralight">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="address"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Address
              </label>
              <textarea
                rows="4"
                name="address"
                placeholder="Address"
                {...register('address')}
                className={`mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-gray-400 border-gray-300'}`}
              ></textarea>
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="bankInfo"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Bank Information <span className="text-error-200">*</span>
              </label>
              <textarea
                rows="4"
                name="bank_info"
                placeholder="Bank Information"
                {...register('bank_info')}
                className={`mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-gray-400 border-gray-300'}`}
              ></textarea>
              {errors.bank_info && (
                <p className="text-error-200 mt-1 font-extralight">
                  {errors.bank_info.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="profilePhoto"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Profile Photo
              </label>
              <input
                type="file"
                {...register('profilePhoto')}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
            </div>
            
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="coverPhoto"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Cover Photo <span className="text-error-200">*</span>
              </label>
              <input
                type="file"
                {...register('coverPhoto')}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
              {errors.coverPhoto && (
                <p className="text-error-200 mt-1 font-extralight">
                  {errors.coverPhoto.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Description
            </label>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              theme="snow"
              {...register('description')}
              className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
            />
          </div>
          <div className="flex justify-end gap-3 items-center mb-5">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
              icon={FaPlus}
            >
              {isLoading ? 'Adding Vendor...' : 'Add Vendor'}
            </button>
            <Button
              text="Discard Vendor"
              onClick={handleDiscard}
              className="bg-error-200 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
