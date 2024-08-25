import { useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import CustomerSidebarMenu from '../../../components/Frontend/Customer/CustomerSidebar/CustomerSidebarMenu'

export default function CustomerHead({ title }) {
  const [isCustomerMenuOpen, setIsCustomerMenuOpen] = useState(false)

  return (
    <>
      <div className="p-4 bg-white rounded-xl mb-6 flex items-center justify-between">
        <h2 className="text-black font-bold text-[18px]">{title}</h2>
        <div>
          <span onClick={() => setIsCustomerMenuOpen(true)}>
            <HiOutlineMenuAlt2 className="border rounded-full w-8 h-8 !p-1" />
          </span>
        </div>
      </div>

      <div
        className={
          'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
          (isCustomerMenuOpen
            ? 'transition-opacity opacity-100 duration-500 translate-x-0'
            : 'transition-all delay-500 opacity-0 translate-x-full')
        }
      >
        <section
          className={
            'w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
            (isCustomerMenuOpen ? 'translate-x-0' : '-translate-x-full')
          }
        >
          <article className="relative w-screen max-w-md pb-10 flex flex-col  space-y-6 overflow-y-scroll h-full">
            <div className="flex items-center px-4 justify-between">
              <div></div>
              <FaArrowAltCircleRight
                onClick={() => {
                  setIsCustomerMenuOpen(false)
                }}
                className=" border ml-5 mt-5 rounded-full w-8 h-8  bg-primaryColor"
              />
            </div>

            <CustomerSidebarMenu />
          </article>
        </section>
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => {
            setIsCustomerMenuOpen(false)
          }}
        ></section>
      </div>
    </>
  )
}
