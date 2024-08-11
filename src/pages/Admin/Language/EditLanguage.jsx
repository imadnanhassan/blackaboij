// import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { useGetSingleLanguageQuery } from '../../../redux/features/api/language/languageApi'
import EditLanguageForm from './EditLanguageForm'
// import { useNavigate } from 'react-router-dom'

export default function EditLanguage() {
  // const [flags, setFlags] = useState([])
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // const { control, handleSubmit, register, errors } = useForm()
  // let userD = JSON.parse(localStorage?.getItem('userData'))
  // let token = userD?.token
  // const { data: languageData, isLoading } = useGetSingleLanguageQuery(id)
  // const language = languageData?.languages
  // console.log(language)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const fetchFlags = async () => {
  //     try {
  //       const response = await fetch('https://restcountries.com/v3.1/all')
  //       const data = await response.json()
  //       const modifiedFlags = data.map(country => ({
  //         value: country?.flags?.png,
  //         label: (
  //           <div className="flex gap-x-2 text-center">
  //             <p className="text-sm">{country?.cca2}</p>
  //           </div>
  //         ),
  //         name: country?.cca2,
  //       }))
  //       setFlags(modifiedFlags)
  //     } catch (error) {
  //       console.error('Error fetching flags:', error)
  //     }
  //   }

  //   fetchFlags()
  // }, [])

  // const onSubmit = async data => {
  //   const formData = new FormData()
  //   formData.append('name', data.name)
  //   formData.append('icon', data.icon.value)
  //   formData.append('code', data.code)
  //   try {
  //     const response = await axios.post(
  //       `${import.meta.env.VITE_BASE_URL}/api/admins/languages/update/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     )

  //     if (response.data && response.data.message) {
  //       toast.success(`${response.data.message}`, {
  //         position: 'bottom-right',
  //         autoClose: 3000,
  //       })
  //     }
  //     navigate('/dashboard/settings/language')
  //   } catch (error) {
  //     toast.error(`${error?.response?.data?.message || 'An error occurred'}`, {
  //       position: 'top-right',
  //       autoClose: 3000,
  //     })
  //   }
  // }

  return (
    <div
      className={`px-5 py-5 rounded w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <div className="flex gap-5 pb-5">
        <div
          className={`w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="px-5">
            <h2 className="text-2xl font-bold mb-4">Update Language</h2>
            <EditLanguageForm
              // onSubmit={onSubmit}
              // flags={flags}
              // language={language}
              // control={control}
              // handleSubmit={handleSubmit}
              // errors={errors}
              // register={register}
              // isDarkMode={isDarkMode}
              // isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
