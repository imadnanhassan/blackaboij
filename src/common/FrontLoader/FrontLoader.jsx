import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function FrontLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <FaSpinner className="animate-spin text-2xl text-black" />
    </div>
  )
}
