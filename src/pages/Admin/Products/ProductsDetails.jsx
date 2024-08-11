import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { IoIosShareAlt } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import ProductDetailsSilder from '../../../components/ProductDetailsSlider/ProductDetailsSlider'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'

export default function ProductsDetails() {
  const [quantity, setQuantity] = useState(1)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const pageTitle = 'Products Details'

  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Products Details' },
  ]

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const products = [
    {
      id: 1,
      name: 'Dolar 20000mAh 18W Fast Charging Power Bank | Dual Output (Type C, 1 USB) and Dual Input (Type C, Micro USB) Ports',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat dolore itaque quo fugit ab! Rem voluptatem perferendis aspernatur dicta quis debitis earum corrupti, beatae officiis placeat. A eum ipsa enim distinctio ut iste aut, esse aperiam, dolores in nemo.',
      rating: 4.2,
      reviews: 2262,
      unitsSold: 3252,
      enjoymentPercentage: 81,
      enjoymentVotes: 105,
      status: 'Out Of Stock',
      price: 2000,
      originalPrice: 2999,
      color: 'Red',
    },
  ]

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      {/* products details */}
      <div
        className={`rounded-[.25rem] border ${isDarkMode ? 'bg-darkColor border-darkColorBody ' : 'bg-lightColor'}`}
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-5 ">
            <div className="box-body">
              <ProductDetailsSilder />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            {products.map(product => (
              <div key={product.id} className="box-body flex flex-col gap-6">
                <h4
                  className={`font-bold text-xl   ${isDarkMode ? 'text-darkColorText ' : 'text-gray-800'}`}
                >
                  {product.name}
                </h4>
                <div className="sm:flex sm:space-x-6 rtl:space-x-reverse sm:space-y-0 space-y-2">
                  <div className="flex space-x-2 rtl:space-x-reverse items-center">
                    <FaStar className="text-warning-300" />

                    <p
                      className={` text-sm space-x-2 rtl:space-x-reverse ${isDarkMode ? 'text-darkTextWhite ' : 'text-gray-500'}`}
                    >
                      {product.rating} Rating
                    </p>
                  </div>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <span className="my-auto w-1.5 h-1.5 inline-block bg-gray-400 rounded-full"></span>
                    <p
                      className={`text-sm space-x-2 rtl:space-x-reverse ${isDarkMode ? 'text-darkTextWhite ' : 'text-gray-500'}`}
                    >
                      {product.reviews} Reviews
                    </p>
                  </div>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <span className="my-auto w-1.5 h-1.5 inline-block bg-gray-400 rounded-full"></span>
                    <p
                      className={`text-sm space-x-2 rtl:space-x-reverse ${isDarkMode ? 'text-darkTextWhite ' : 'text-gray-500'}`}
                    >
                      {product.unitsSold} Units Sold
                    </p>
                  </div>
                </div>

                <p
                  className={`${isDarkMode ? 'text-darkTextWhite ' : 'text-gray-500'}`}
                >
                  <strong className="text-primaryColor">
                    {product.enjoymentPercentage} %
                  </strong>{' '}
                  {''}
                  of buyers enjoyed this product!{' '}
                  <strong className="text-success-300">
                    ({product.enjoymentVotes})
                  </strong>
                </p>
                {/* discription */}
                <div className="flex flex-col gap-3">
                  <h4
                    className={`font-bold text-sm my-auto w-28 ${isDarkMode ? 'text-darkColorText ' : 'text-gray-800'}`}
                  >
                    Discription
                  </h4>
                  <p
                    className={`my-auto font-normal text-sm ${isDarkMode ? 'text-darkTextWhite ' : 'text-gray-500'}`}
                  >
                    {product.description}
                  </p>
                </div>

                <div className="sm:flex sm:space-x-5">
                  <h5
                    className={`font-bold text-sm my-auto w-28  ${isDarkMode ? 'text-darkColorText ' : 'text-gray-800'}`}
                  >
                    Status :
                  </h5>
                  <span
                    className={`my-auto font-medium text-sm ${product.status === 'Available In Stock' ? 'text-success-300' : 'text-Vindigo-600'}`}
                  >
                    {product.status}
                  </span>
                </div>

                <div className="sm:flex sm:space-x-2">
                  <h5
                    className={`font-bold text-sm my-auto w-28  ${isDarkMode ? 'text-darkColorText ' : 'text-gray-800'}`}
                  >
                    Price :
                  </h5>
                  <span className="text-2xl font-semibold text-primaryColor">
                    ${product.price}
                  </span>
                  <span
                    className={`my-auto line-through text-base font-semibold ${isDarkMode ? 'text-darkColorText ' : 'text-gray-500'}`}
                  >
                    ${product.originalPrice}
                  </span>
                </div>

                <div className="sm:flex sm:space-x-3">
                  <h5
                    className={`font-bold text-sm my-auto w-28  ${isDarkMode ? 'text-darkColorText ' : 'text-gray-800'}`}
                  >
                    Color :
                  </h5>
                  <div className="flex items-center gap-2">
                    <span className="my-auto w-3 h-3 inline-block bg-error-200 "></span>
                    <span className="text-error-200">{product.color}</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Button
                    text="Add To Favourites"
                    icon={FaHeart}
                    className="text-primaryColor hover:bg-Vindigo-200/35 py-1 px-2 rounded transition-all duration-150 font-light flex items-center gap-2"
                  />
                  <Button
                    text="Compare Product"
                    icon={IoIosShareAlt}
                    className="text-error-100 hover:bg-red-100/35 py-1 px-2 rounded transition-all duration-150 font-light flex items-center gap-2"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* order */}
          <div className="col-span-12 lg:col-span-3">
            <div className="box-body">
              <div className="bg-success-300 p-4 box">
                <div className="flex gap-4">
                  <div className="space-y-2">
                    <h5 className="text-white text-xl">30% Off</h5>
                    <p className="text-xs text-white/80">
                      Grab it fast has limited Stock
                    </p>
                  </div>
                  <div className="ltr:ml-auto rtl:mr-auto my-auto ">
                    <span className="px-2 py-1 badge bg-black/20 text-white rounded-sm text-xs">
                      Untill Mar 9th 2023
                    </span>
                  </div>
                </div>
              </div>
              <div className="border rounded">
                <div className="border-b p-4">
                  <h5 className="text-base font-semibold text-slate-900">
                    Set Order
                  </h5>
                </div>
                <div className="px-4 py-10 flex flex-col gap-5">
                  <div className="flex space-x-3 rtl:space-x-reverse items-center ">
                    <h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">
                      Item:
                    </h5>
                    <img
                      src="https://react.spruko.com/synto-js/preview/assets/6-e77df3ff.png"
                      alt=""
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex space-x-3 rtl:space-x-reverse ">
                    <h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">
                      Color:
                    </h5>
                    <span className="font-medium text-sm">Red</span>
                  </div>
                  <div className="flex space-x-3 rtl:space-x-reverse ">
                    <h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">
                      Capacity :
                    </h5>
                    <span>2000 mAh</span>
                  </div>
                  <div className="sm:flex sm:space-x-3 ">
                    <h4 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">
                      Quantity:
                    </h4>
                    <div className="flex items-center ">
                      <button
                        onClick={handleDecrement}
                        className="bg-primaryColor text-white px-3 py-[1px] rounded-l-md"
                      >
                        -
                      </button>
                      <span className="px-3 py-[1px] bg-gray-200">
                        {quantity}
                      </span>
                      <button
                        onClick={handleIncrement}
                        className="bg-primaryColor text-white px-3 py-[1px] rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex space-x-3 rtl:space-x-reverse">
                    <h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">
                      Total:
                    </h5>
                    <p className="font-medium text-sm">$2000</p>
                  </div>
                  <p className="font-medium text-sm text-gray-700 dark:text-white/70">
                    Expected Delivery By Feb 25 ,2023
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      text="Add To Cart"
                      className="bg-primaryColor py-2 px-4 rounded text-white text-[14px] w-full "
                    />

                    <Button
                      text=" Buy Now"
                      className="border py-2 px-4 rounded text-primaryColor hover:bg-primaryColor hover:text-white transition-all duration-300 text-[14px] w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <span className="flex gap-1 justify-center">
                  <p className="text-gray-500 dark:text-white/70 text-sm text-center">
                    Any Issue Reagarding Product ?
                  </p>
                  <Link className="flex text-primaryColor dark:text-white/70 text-sm text-center items-center gap-1">
                    <IoIosInformationCircleOutline />
                    Report
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// col-span-12 lg:col-span-5
// col-span-12 lg:col-span-4
// col-span-12 lg:col-span-3
