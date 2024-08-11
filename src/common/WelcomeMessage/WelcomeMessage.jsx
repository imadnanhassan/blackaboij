import React, { useState, useEffect } from 'react'

const WelcomeMessage = ({ customerName, isNewCustomer }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isNewCustomer) {
      setIsVisible(false)
    }
  }, [isNewCustomer])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    isVisible && (
      <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Welcome, {customerName}!</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <p className="mt-2 text-gray-600">
          We're excited to have you here. If you have any questions, feel free
          to reach out!
        </p>
      </div>
    )
  )
}

export default WelcomeMessage
