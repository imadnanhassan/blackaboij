import React, { useState } from 'react'

export default function OrderTrackingBtn() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    'Payment',
    'Processing',
    'Packing',
    'Ready to ship',
    'Shipping',
    'Complete',
  ]

  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {selectedOption || 'Select an option'}
        {/* Arrow */}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 8l-5 5h10l-5-5z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Items */}
      {isOpen && (
        <div
          className="z-30 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`${
                  index > 0 ? 'border-t border-gray-200' : ''
                } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
