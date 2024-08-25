/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const ProductHighlightSection = ({ product }) => {
  const [selectColor, setSelectColor] = useState('')
  const [selectSize, setSelectSize] = useState('')

  const name = product?.name;
  const log_description = product?.log_description;
  const price = product?.regular_price;
  let discount_amount = product?.discount_price;
  const discount_type = product?.discount_type;
  const rating = 4;
  let discount_price = discount_type === 1 ? discount_amount : ((discount_amount * price / 100));

  const handleSelectColor = color => {
    setSelectColor(color)
  }

  const handleSelectSize = size => {
    setSelectSize(size)
  }

  return (
    <div>
      <h2 className="font-bold   max-w-screen-md">{name && (JSON.parse(name)['en'])}</h2>
      {/* Heading section */}
      <section className=" flex items-center gap-1 mt-4 mb-6 text-sm ">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar className="text-yellow-400" key={index}></FaStar>
        ))}
        <span className="text-gray-500 mr-2">{rating}</span>
        <span className="text-gray-500 mr-2"> 39 Reviews </span>
        <span className="text-gray-500 mr-2">354 Sold</span>
      </section>
      <hr />
      {/* Limited Offer */}
      <div className="flex justify-between items-center bg-ftPrimaryColor my-3 rounded px-3 py-1.5">
        <h2 className="text-white font-bold"> Limited Offers</h2>
        <p className="text-slate-100 text-xs "> Ends: Sep, 11: 59 PM</p>
      </div>

      {/* Price section */}

      <div className="flex items-center flex-wrap gap-3 my-6">
        <p className="text-lg">
          BDT<span className="text-3xl font-bold ">{price - discount_price}</span>
        </p>
        <p>
          <span className="text-xs text-gray-500 line-through mr-2">
            BDT {price}
          </span>
          <span className="bg-ftPrimaryColor text-white px-1.5 py-1 rounded-xl font-semibold text-xs">
            {discount_amount}{discount_type === 1 ? 'TK ' : '% '} off
          </span>
        </p>
      </div>

      <hr />

      {/* Color section */}
      <div className="my-4">
        <p className="text-sm py-2">
          <span className="font-semibold">Color:</span>{' '}
          <span className="text-gray-600">{selectColor}</span>
        </p>

        <div className="flex flex-wrap gap-2">
          <div
            className="w-4 h-4 rounded cursor-pointer bg-red-500"
            onClick={() => handleSelectColor('Red')}
          ></div>
          <div
            className="w-4 h-4 rounded cursor-pointer bg-blue-500"
            onClick={() => handleSelectColor('Blue')}
          ></div>
          <div
            className="w-4 h-4 rounded cursor-pointer bg-green-500"
            onClick={() => handleSelectColor('Green')}
          ></div>
          <div
            className="w-4 h-4 rounded cursor-pointer bg-yellow-500"
            onClick={() => handleSelectColor('Yellow')}
          ></div>
          <div
            className="w-4 h-4 rounded cursor-pointer bg-indigo-500"
            onClick={() => handleSelectColor('Indigo')}
          ></div>
        </div>
      </div>
      {/* Size section */}
      <div className="my-4">
        <p>
          <span className="font-semibold text-sm">
            Size: <span className=" text-gray-600">{selectSize}</span>
          </span>
        </p>
        <div className="flex flex-wrap gap-2 my-2">
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(36)}
          >
            {' '}
            36
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(37)}
          >
            {' '}
            37
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(38)}
          >
            {' '}
            38
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(39)}
          >
            {' '}
            39
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(40)}
          >
            {' '}
            40
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(41)}
          >
            {' '}
            41
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(42)}
          >
            {' '}
            42
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(43)}
          >
            {' '}
            43
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(44)}
          >
            {' '}
            44
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(45)}
          >
            {' '}
            45
          </span>
          <span
            className="px-3 py-1 font-semibold rounded cursor-pointer border text-xs text-gray-500"
            onClick={() => handleSelectSize(46)}
          >
            {' '}
            46
          </span>
        </div>
      </div>
      {/* Quantity section */}
      <div className="my-4">
        <table className="table-auto border border-collapse w-full">
          <thead className="border">
            <tr className="border">
              <td className="font-semibold text-xs p-1.5 border-r " colSpan={3}>
                Quantity
              </td>
              <td className="font-semibold text-xs p-1.5" colSpan={1}>
                Price
              </td>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="bg-[#F2F2F2] border">
              <td colSpan={3} className=" border-r p-1.5 ">
                1 - 49 pieces
              </td>
              <td className=" p-1.5">2000 BDT</td>
            </tr>
            <tr className="bg-white border">
              <td colSpan={3} className=" border-r p-1.5">
                50 - 9999 pieces
              </td>
              <td className="  p-1.5">1500 BDT</td>
            </tr>
            <tr className="bg-[#F2F2F2] border">
              <td colSpan={3} className=" border-r p-1.5 ">
                10000 - 99998 pieces
              </td>
              <td className=" p-1.5">1200 BDT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductHighlightSection
