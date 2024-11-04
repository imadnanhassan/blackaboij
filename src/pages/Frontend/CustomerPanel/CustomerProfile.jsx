import React, { useContext, useState } from 'react'
import './CustomerProfile.css'

import CustomerHead from './CustomerHead'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import { baseUrl } from '../../../hooks/useThumbnailImage'
import { useForm } from 'react-hook-form'
import { useUpdateProfileMutation } from '../../../redux/features/api/Customer/profileUpdateApi'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

export default function CustomerProfile() {
  const [imagePreview, setImagePreview] = useState(null)
  const { loading, customer } = useContext(CustomerContext)
  const [updateProfile, { isLoading }] = useUpdateProfileMutation()
  const { handleSubmit, register } = useForm()
  if (loading) {
    return <>Loading...</>
  }

  const onSubmit = async data => {
    console.log(data, imagePreview)
    if (data.password == data.confirm_password) {
      const formData = new FormData()
      formData.append('id', customer?.currentCustomer.id)
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone_number', data.phone_number)
      formData.append('photo', imagePreview)
      formData.append('password', data.confirm_password)
      const response = await updateProfile(formData)
      console.log(response)
      if (response?.data.status == 200) {
        Swal.fire('Success', response.data.message, 'success')
        window.location.reload()
      } else if (response?.data.status == 401) {
        response.data.errors.forEach(el => toast.error(el))
      } else {
        Swal.fire('Error', response.data.message, 'error')
      }
    } else {
      toast.error('Password and Confirm Password not matched.')
    }
  }

  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      setImagePreview(file)
    }
  }
  return (
    <div>
      <CustomerHead title="Profile" />

      <div className="profile_form md:h-auto ">
        <form
          action=""
          className="profile_form_wrapper"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              Full Name
            </label>
            <input
              type="text"
              className="input_control"
              placeholder="Miss. Lamiya"
              defaultValue={customer?.currentCustomer.name}
              {...register('name', { required: true })}
            />
          </div>
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              Email
            </label>
            <input
              type="email"
              className="input_control"
              placeholder="lamiya@gmail.om"
              defaultValue={customer?.currentCustomer.email}
              {...register('email', { required: true })}
            />
          </div>
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              {' '}
              Phone Number
            </label>
            <input
              type="tel"
              className="input_control"
              placeholder="+0880 17235-07989"
              defaultValue={customer?.currentCustomer.phone_number}
              {...register('phone_number')}
            />
          </div>
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              Password
            </label>
            <input
              type="password"
              className="input_control"
              placeholder="******"
              {...register('password')}
            />
          </div>
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              New Password
            </label>
            <input
              type="password"
              className="input_control"
              placeholder="******"
              {...register('confirm_password')}
            />
          </div>
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              Profile Image
            </label>
            <div className="profile_image_edit">
              <div className="profile_image_uploadview">
                {imagePreview ? (
                  <img
                    id="user_profile"
                    src={URL.createObjectURL(imagePreview)}
                    alt="Preview"
                  />
                ) : (
                  <img
                    id="user_profile"
                    src={`${baseUrl}/profile/${customer?.currentCustomer.photo}`}
                    alt={customer?.currentCustomer.name}
                  />
                )}
              </div>
              <div className="profile_upload_btn">
                <label className="file">
                  <input
                    type="file"
                    id="userChange"
                    multiple=""
                    aria-label="File browser example"
                    onChange={handleImageChange}
                  />
                  <span className="file-custom">Image Upload</span>
                </label>
              </div>
            </div>
          </div>

          <div className="profile_form_inner">
            <div className="profile_update_submit">
              <button
                disabled={isLoading}
                className="relative cursor-pointer inline-flex items-center justify-center md:px-10  md:py-3 px-6 py-2 hover:text-black overflow-hidden font-custom font-medium tracking-tighter text-white bg-black  group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-300 group-hover:w-full group-hover:h-56"></span>
                <span className="relative whitespace-nowrap md:text-[16px]  text-[12px] ">
                  {isLoading ? 'Updating...' : 'Update Profile'}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
