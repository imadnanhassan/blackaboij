import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function CustomerLoader() {
  return (
    <div className="flex justify-center items-center h-full bg-white">
      <FaSpinner className="animate-spin text-3xl text-gray-500" />
    </div>
  )
}
