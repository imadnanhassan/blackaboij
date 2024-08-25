import React, { useState } from 'react'
import './CustomerProfile.css'
import images from '../../../assets/img/images'
import CustomerHead from './CustomerHead'

export default function CustomerProfile() {
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <div>
      <CustomerHead title="Profile" />

      <div className="profile_form">
        <form action="" className="profile_form_wrapper">
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              Full Name
            </label>
            <input
              type="text"
              className="input_control"
              placeholder="Miss. Lamiya"
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
            />
          </div>
          <div className="profile_form_inner">
            <label htmlFor="" className="">
              Profile Image
            </label>
            <div className="profile_image_edit">
              <div className="profile_image_uploadview">
                {imagePreview ? (
                  <img id="user_profile" src={imagePreview} alt="Preview" />
                ) : (
                  <img
                    id="user_profile"
                    src={images.userprofile}
                    alt="Default"
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
              <button className="main_btn">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
