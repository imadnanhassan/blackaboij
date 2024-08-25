import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

export default function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <div
      className={
        'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isMobileMenuOpen
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all delay-500 opacity-0 translate-x-full')
      }
    >
      <section
        className={
          'w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
          (isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full')
        }
      >
        <article className="relative w-screen max-w-md pb-10 flex flex-col  space-y-6 overflow-y-scroll h-full">
          <div className="flex items-center px-4 justify-between">
            <div></div>
            <FaArrowAltCircleRight
              onClick={() => {
                setIsMobileMenuOpen(false)
              }}
              className=" border ml-5 mt-5 rounded-full w-8 h-8  bg-primaryColor"
            />
                  </div>
                  
                  

          <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-400 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                  <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsMobileMenuOpen(false)
        }}
      ></section>
    </div>
  )
}
