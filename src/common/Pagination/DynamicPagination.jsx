import React, { useState } from 'react'

const itemsPerPage = 10

const DynamicPagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data / itemsPerPage)

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const renderPaginationButtons = () => {
    const buttons = []

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded ${
            currentPage === i
              ? 'bg-primaryColor text-lightColor font-medium'
              : 'hover:bg-Vindigo-800 hover:text-lightColor'
          }`}
        >
          {i}
        </button>,
      )
    }

    return buttons
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      {/* Items per page dropdown */}
      {/* ... */}

      {/* Total entries */}
      <p className="text-gray-500 mt-4 lg:mt-0">
        Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{' '}
        {Math.min(currentPage * itemsPerPage, data)} of {data} entries
      </p>

      {/* Pagination controls */}
      <nav
        aria-label="Pagination"
        className="flex justify-center gap-1 items-center text-gray-600 mt-8 lg:mt-0"
      >
        <a
          href="#"
          className="p-2 mr-4 rounded hover:bg-Vindigo-800 hover:text-lightColor"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
        {renderPaginationButtons()}
        <a
          href="#"
          className="p-2 ml-4 rounded hover:bg-Vindigo-800 hover:text-lightColor"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </nav>
    </div>
  )
}

export default DynamicPagination
