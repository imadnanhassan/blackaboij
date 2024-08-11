import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { vendorData } from './vendorData'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function VendorProfile() {
  const { id } = useParams()
  const vendor = vendorData.find(v => v.vendorId === parseInt(id))
  console.log(vendor?.vendorProduct)

  if (!vendor) {
    return <p>Vendor not found</p>
  }

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  return (
    <section
      className={` ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <div className=" ">
        <div className="relative ">
          <img
            src={vendor.vendorBanner}
            alt=""
            className=" w-full mx-auto h-[250px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 flex items-center  gap-5 pb-4 px-5">
            <div className="rounded">
              <img
                src={vendor.vendorPhoto}
                alt=""
                className="rounded-lg lg:w-[120px] border-4 border-white -mt-6 ml-6"
              />
            </div>
            <div className="mt-3 ">
              <h3 className="py-1 text-xl font-bold text-white">
                {vendor.shopName}
              </h3>
              <h4 className="py-1 text-white">{vendor.vendorName}</h4>
            </div>
          </div>
        </div>

        <div
          className={`py-10 ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
        >
          <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 px-10">
            <div className="about">
              <div
                className={` rounded-sm w-full  ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                <div className="box-header font-light text-sm">
                  <h5>About Me</h5>
                </div>

                <div className="box-body space-y-3">
                  <p className="font-light text-sm">{vendor.description}</p>
                </div>
              </div>
              <div
                className={`mt-5 rounded-sm w-full  ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                <div className="box-header font-light text-sm">
                  <h5>General Info</h5>
                </div>

                <div className="box-body space-y-3">
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className="px-2 py-1 w-[150px]">
                          <strong>Shop Name </strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong> {vendor.shopName}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-2 py-1">
                          <strong>Joined</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong>
                          {vendor.createDate}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-2 py-1">
                          <strong>Age</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong> 25
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-2 py-1">
                          <strong>Address</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong> {vendor.address}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className={` rounded-sm w-full  cd `}
            >
              <div className="box-body space-y-3">
                <h5>Bank Information</h5>

                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 w-[150px]">
                        <strong>Bank Name</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {vendor?.bankInfo?.bankName}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Branch</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        {vendor?.bankInfo?.branch}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Bank Holder Name</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {vendor?.bankInfo?.Name}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Account No</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {vendor?.bankInfo?.accountNo}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* contact info*/}
              <div className="box-body space-y-3">
                <h5>Contact Information</h5>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 w-[150px]">
                        <strong>Contact No </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> +123(45)-158-90.
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Email Id </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        andersonitumay@abc.com
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Address </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> andersonitumay@abc.com
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Website link </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> www.andersonitumay.com
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className={`rounded-sm w-full ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
            >
              Comission Money
            </div>
          </div>
        </div>
        <div
          className={`pb-5 px-10 ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
        >
          <div className="flex items-center justify-end mb-3 gap-[30px]">
            <Link to="/dashboard/add-productV2">
              <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span className="relative">+ Product</span>
              </button>
            </Link>
          </div>
          <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-2 rounded-md">
            {vendor?.vendorProduct.map(product => (
              <div
                key={product.id}
                className={`flash_product  shadow rounded-md group ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
              >
                <div className="flash_product_thumb lg:w-[200px] mx-auto w-full ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full group-hover:scale-110 transition-all duration-500 rounded-lg p-3"
                  />
                </div>
                <div className="flash_product_content px-5 py-5">
                  <div className="product_rating flex">
                    {[...Array(Math.floor(product.rating))].map((_, index) => (
                      <FaStar key={index} className="text-yellowColor" />
                    ))}
                    {product.rating % 1 >= 0.5 && (
                      <FaStarHalfAlt className="text-yellowColor" />
                    )}
                  </div>
                  <div className="product_title mt-2">
                    <p className="text-[14px] text-[#041826] leading-5 font-medium group-hover:text-ftPrimaryColor duration-200 transition-all group-hover:underline">
                      {product.title.length > 80
                        ? `${product.title.slice(0, 80)}...`
                        : product.title}
                    </p>
                  </div>

                  <div className="flash_save h-8 w-20 flex items-center justify-center  rounded-tr-xl rounded-bl-2xl bg-ftPrimaryColor mt-2">
                    <p className="text-center text-white text-[14px] leading-[20px]">
                      Save {product.save_percentage} ৳
                    </p>
                  </div>
                  <div className="flash_shipping">
                    <p
                      className={`text-[#041826] uppercase text-[10px] mt-3 font-semibold ${product.free_shipping ? 'border border-ftPrimaryColor px-2 w-[108px]' : ''}`}
                    >
                      {product.free_shipping ? 'Free Shipping' : ''}
                    </p>
                  </div>

                  <div
                    className={`product_price_inner flex items-center gap-2 ${product.free_shipping ? 'py-2' : 'py-0'}`}
                  >
                    <strong className="offer_price text-ftPrimaryColor text-[16px] font-bold">
                      ৳ {product.price}
                    </strong>
                    <span className="old_price line-through text-[14px] text-[#0f172a99] font-medium">
                      ৳ {product.old_price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
