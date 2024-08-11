import React from 'react'

export default function SkeletonLoader() {
  return (
    <div className="p-6">
      {/* Page Header Skeleton */}
      <div className="mb-6">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/4 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Form Skeleton */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>

        {/* Right Table Skeleton */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
          <div className="space-y-4">
            {/* Table Headers */}
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/12"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/12"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/12"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/12"></div>
            </div>
            {/* Table Rows */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2"
              >
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/12"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/12"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/12"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
