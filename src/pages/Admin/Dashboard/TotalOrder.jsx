import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function TotalOrder() {
    const isDarkMode = useSelector(state => state.theme.isDarkMode)
  return (
    <div
      className={`rounded py-5 shadow-custom lg:mb-0 mb-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <div className="md:flex gap-5 px-5 py-3 ">
        <div className=" flex flex-col  lg:w-[50%] w-full">
          <div className="bg-[#F4EFFE] h-[300px]  px-8 rounded-md flex justify-around flex-col">
            <div className="md:flex flex-col">
              <span className="text-[#8f60ee] text-[1.875rem] font-semibold">
                77
              </span>
              <span
                className={`${isDarkMode ? 'text-lightColorText ' : ' text-lightColorText '}`}
              >
                Total Order
              </span>
            </div>
            <Link
              to={'/dashboard/order-list'}
              className=" py-2 w-full rounded text-white bg-[#8f60ee] hover:bg-violet-900 transition-all duration-300 text-center"
            >
              All Orders
            </Link>
          </div>
          <div className="h-[80px] bg-[#F0416C] text-white rounded mt-2 lg:mb-0 mb-2 flex items-center justify-between px-8">
            <span className="flex items-center gap-2">
              <MdOutlineWatchLater />
              <p>Pending order</p>
            </span>
            <span className="">74</span>
          </div>
        </div>
        <div className=" md:flex flex-col lg:w-[50%] w-full">
          <div className="bg-[#f1fafd] h-[88px] flex justify-between items-center mb-3 rounded w-full px-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.999"
                height="23.999"
                className="mr-3"
                viewBox="0 0 23.999 23.999"
              >
                <g
                  id="Group_29223"
                  data-name="Group 29223"
                  transform="translate(-2.25 -2.25)"
                >
                  <path
                    id="Path_18961"
                    data-name="Path 18961"
                    d="M22.071,26.249H6.436A4.186,4.186,0,0,1,2.25,22.063V6.428A4.186,4.186,0,0,1,6.436,2.25H22.071a4.178,4.178,0,0,1,4.178,4.178V22.063a4.186,4.186,0,0,1-4.178,4.186ZM6.436,4.217A2.211,2.211,0,0,0,4.217,6.428V22.063a2.219,2.219,0,0,0,2.219,2.219H22.071a2.211,2.211,0,0,0,2.211-2.219V6.428a2.211,2.211,0,0,0-2.211-2.211Z"
                    fill="#009ef7"
                  ></path>
                  <path
                    id="Path_18962"
                    data-name="Path 18962"
                    d="M12.5,15.233a1.9,1.9,0,0,1-.787-.173,1.959,1.959,0,0,1-1.149-1.8V3.234a.984.984,0,1,1,1.967,0V13.258l1.849-1.637a1.9,1.9,0,0,1,2.526,0l1.9,1.645L18.743,3.234a.984.984,0,0,1,1.967,0V13.258a1.959,1.959,0,0,1-1.149,1.8,1.9,1.9,0,0,1-2.054-.307l-1.873-1.621-1.873,1.629a1.9,1.9,0,0,1-1.259.472ZM15.6,13.109ZM15.674,13.109Zm1.141,8.278H9.734a.984.984,0,1,1,0-1.967h7.082a.984.984,0,1,1,0,1.967Z"
                    transform="translate(-1.385)"
                    fill="#009ef7"
                  ></path>
                </g>
              </svg>
              <p className="font-medium text-[13px] text-[#232734]">
                Order Placed
              </p>
            </div>
            <span className="font-semibold text-[26px] text-[#009ef7]">77</span>
          </div>
          <div className="bg-[#E6FFF3] h-[88px] flex justify-between items-center mb-3 rounded w-full px-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.999"
                height="25.134"
                className="mr-3"
                viewBox="0 0 23.999 25.134"
              >
                <g
                  id="Group_29224"
                  data-name="Group 29224"
                  transform="translate(-41.293 -19.076)"
                >
                  <path
                    id="Path_18953"
                    data-name="Path 18953"
                    d="M63.758,20.966V39.321c0,.054,0,.11-.008.163.01-.069.018-.135.028-.2a1.214,1.214,0,0,1-.082.3l.076-.184a1.7,1.7,0,0,1-.1.176c-.061.1.112-.122.051-.061-.023.023-.043.051-.066.074s-.041.038-.061.056c-.092.089.161-.1.048-.038-.059.033-.115.069-.176.1l.184-.076a1.184,1.184,0,0,1-.3.082l.2-.028a5.439,5.439,0,0,1-.576.008H58.56l.66,1.15a6.862,6.862,0,1,0-12.035-6.582,7.037,7.037,0,0,0-.732,2.656,6.91,6.91,0,0,0,.579,3.25,6.391,6.391,0,0,0,.339.673l.66-1.15H43.715c-.227,0-.464.015-.691-.008l.2.028a1.214,1.214,0,0,1-.3-.082l.184.076a1.7,1.7,0,0,1-.176-.1c-.1-.061.122.112.061.051-.023-.023-.051-.043-.074-.066s-.038-.041-.056-.061c-.089-.092.1.161.038.048-.033-.059-.069-.115-.1-.176l.076.184a1.214,1.214,0,0,1-.082-.3c.01.069.018.135.028.2a5.309,5.309,0,0,1-.008-.6V20.989c0-.054,0-.11.008-.163-.01.069-.018.135-.028.2a1.215,1.215,0,0,1,.082-.3l-.076.184a1.7,1.7,0,0,1,.1-.176c.061-.1-.112.122-.051.061.023-.023.043-.051.066-.074s.041-.038.061-.056c.092-.089-.161.1-.048.038.059-.033.115-.069.176-.1l-.184.076a1.184,1.184,0,0,1,.3-.082l-.2.028a6.185,6.185,0,0,1,.653-.008H63.4c.056,0,.11,0,.166.008l-.2-.028a1.215,1.215,0,0,1,.3.082l-.184-.076a1.7,1.7,0,0,1,.176.1c.1.061-.122-.112-.061-.051.023.023.051.043.074.066s.038.041.056.061c.089.092-.1-.161-.038-.048.033.059.069.115.1.176l-.076-.184a1.184,1.184,0,0,1,.082.3c-.01-.069-.018-.135-.028-.2,0,.051.005.1.008.143a.765.765,0,0,0,1.53,0A1.893,1.893,0,0,0,63.419,19.1H43.264a2.074,2.074,0,0,0-1.01.237A1.9,1.9,0,0,0,41.3,21V38.712a3.559,3.559,0,0,0,.1,1.242,1.915,1.915,0,0,0,1.216,1.175,2.017,2.017,0,0,0,.63.082h4.78a.772.772,0,0,0,.66-1.15,6.534,6.534,0,0,1-.349-.693l.076.184a6.2,6.2,0,0,1-.428-1.565c.01.069.018.135.028.2a6.223,6.223,0,0,1,0-1.629c-.01.069-.018.135-.028.2a6.2,6.2,0,0,1,.423-1.553l-.076.184a6.186,6.186,0,0,1,.413-.808c.079-.127.161-.255.25-.377l.069-.094c.01-.013.02-.025.031-.041.043-.061-.071.1-.069.089.013-.056.11-.135.148-.181a5.992,5.992,0,0,1,.63-.642c.054-.048.11-.094.166-.14l.092-.074c.087-.071-.158.117-.036.028s.245-.176.37-.257a6.1,6.1,0,0,1,.92-.484l-.184.076a6.173,6.173,0,0,1,1.553-.423l-.2.028a6.2,6.2,0,0,1,1.626,0l-.2-.028a6.2,6.2,0,0,1,1.553.423l-.184-.076a6.186,6.186,0,0,1,.808.413c.127.079.255.161.377.25l.094.069c.013.01.025.02.041.031.061.043-.1-.071-.089-.069.056.013.135.11.181.148a5.991,5.991,0,0,1,.642.63c.048.054.094.11.14.166.025.031.048.061.074.092.071.087-.117-.158-.028-.036s.176.245.257.37a6.1,6.1,0,0,1,.484.92l-.076-.184a6.173,6.173,0,0,1,.423,1.553c-.01-.069-.018-.135-.028-.2a6.335,6.335,0,0,1,0,1.629c.01-.069.018-.135.028-.2a6.171,6.171,0,0,1-.428,1.565l.076-.184a6.534,6.534,0,0,1-.349.693.771.771,0,0,0,.66,1.15h2.33c.841,0,1.68.008,2.521,0a1.891,1.891,0,0,0,1.879-1.866V20.966a.767.767,0,0,0-1.535,0Z"
                    transform="translate(0 -0.023)"
                    fill="#4fcc89"
                  ></path>
                  <path
                    id="Path_18954"
                    data-name="Path 18954"
                    d="M251.777,19.842v6.939l1.15-.66-2.506-1.313c-.107-.056-.217-.117-.326-.171a.844.844,0,0,0-.806.015c-.056.031-.115.059-.171.089-.482.252-.966.5-1.448.76l-1.18.619,1.15.66V19.842l-.765.765h5.665a.765.765,0,0,0,0-1.53h-5.665a.775.775,0,0,0-.765.765v6.939a.773.773,0,0,0,1.15.66l2.475-1.3c.12-.061.237-.125.357-.186h-.772l2.475,1.3c.12.061.237.125.357.186a.773.773,0,0,0,1.15-.66V19.842a.762.762,0,1,0-1.524,0Zm3.263,17.506a6.233,6.233,0,0,1-.054.816c.01-.069.018-.135.028-.2a6.171,6.171,0,0,1-.428,1.565l.076-.184a6.214,6.214,0,0,1-.607,1.1c-.048.071-.1.138-.15.209.148-.209.043-.056.005-.01s-.061.076-.094.112c-.12.14-.245.275-.375.4s-.268.252-.41.367l-.115.092c.2-.163.056-.043.008-.008-.069.051-.14.1-.212.148a6.1,6.1,0,0,1-1.007.546l.184-.076a6.152,6.152,0,0,1-1.563.428l.2-.028a6.262,6.262,0,0,1-1.634,0l.2.028a6.152,6.152,0,0,1-1.563-.428l.184.076a6,6,0,0,1-1.007-.546c-.071-.048-.143-.1-.212-.148-.046-.036-.191-.156.008.008l-.115-.092c-.143-.117-.278-.24-.41-.367s-.255-.263-.375-.4c-.031-.038-.064-.074-.094-.112s-.143-.2.005.01c-.048-.069-.1-.138-.15-.209a6.213,6.213,0,0,1-.607-1.1l.076.184a6.2,6.2,0,0,1-.428-1.565c.01.069.018.135.028.2a6.223,6.223,0,0,1,0-1.629c-.01.069-.018.135-.028.2a6.2,6.2,0,0,1,.423-1.553l-.076.184a6.184,6.184,0,0,1,.413-.808c.079-.127.161-.255.25-.377l.069-.094c.01-.013.02-.025.031-.041.043-.061-.071.1-.069.089.013-.056.11-.135.148-.181a5.992,5.992,0,0,1,.63-.642c.054-.048.11-.094.166-.14l.092-.074c.087-.071-.158.117-.036.028s.245-.176.37-.257a6.1,6.1,0,0,1,.92-.484l-.184.076a6.173,6.173,0,0,1,1.553-.423l-.2.028a6.2,6.2,0,0,1,1.626,0l-.2-.028a6.2,6.2,0,0,1,1.553.423l-.184-.076a6.186,6.186,0,0,1,.808.413c.127.079.255.161.377.25l.094.069c.013.01.025.02.041.031.061.043-.1-.071-.089-.069.056.013.135.11.181.148a5.993,5.993,0,0,1,.642.63c.048.054.094.11.14.166.025.031.048.061.074.092.071.087-.117-.158-.028-.036s.176.245.257.37a6.1,6.1,0,0,1,.484.92l-.076-.184a6.173,6.173,0,0,1,.423,1.553c-.01-.069-.018-.135-.028-.2.023.27.041.54.041.813a.765.765,0,1,0,1.53,0,6.848,6.848,0,0,0-3.939-6.205,6.727,6.727,0,0,0-1.853-.566,7.4,7.4,0,0,0-2.187.008,6.849,6.849,0,0,0-5.264,9.269,7.23,7.23,0,0,0,1.219,2.009,6.833,6.833,0,0,0,5.713,2.322,6.985,6.985,0,0,0,3.995-1.7,6.788,6.788,0,0,0,2.19-3.832,7.471,7.471,0,0,0,.127-1.305.765.765,0,0,0-1.53,0Z"
                    transform="translate(-196.417)"
                    fill="#4fcc89"
                  ></path>
                  <path
                    id="Path_18955"
                    data-name="Path 18955"
                    d="M359.965,640l1.706,1.706.242.242a.774.774,0,0,0,1.081,0l1.366-1.366,2.177-2.177.5-.5a.764.764,0,1,0-1.081-1.081l-1.366,1.366-2.177,2.177-.5.5h1.081l-1.706-1.706-.242-.242A.764.764,0,0,0,359.965,640Z"
                    transform="translate(-310.336 -601.79)"
                    fill="#4fcc89"
                  ></path>
                </g>
              </svg>
              <p className="font-medium text-[13px] text-[#232734]">
                Confirmed Order
              </p>
            </div>
            <span className="font-semibold text-[26px] text-success-300">
              77
            </span>
          </div>
          <div className="bg-[#FFF4F8] h-[88px] flex justify-between items-center mb-3 rounded w-full px-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26.182"
                className="mr-3"
                viewBox="0 0 24 26.182"
              >
                <path
                  id="Path_18963"
                  data-name="Path 18963"
                  d="M16,0,4,5.455V20.727l12,5.455,12-5.455V5.455Zm0,2.4,8.045,3.657L16,9.712,7.952,6.055ZM6.182,19.323V7.645l8.727,3.965V23.288Zm19.636,0-8.727,3.966V11.61l8.727-3.966Z"
                  transform="translate(-4)"
                  fill="#f1416c"
                ></path>
              </svg>
              <p className="font-medium text-[13px] text-[#232734]">
                Processed Order
              </p>
            </div>
            <span className="font-semibold text-[26px] text-error-200">77</span>
          </div>
          <div className="bg-[#FFF9E3] h-[88px] flex justify-between items-center mb-3 rounded w-full px-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20.727"
                className="mr-3"
                viewBox="0 0 24 20.727"
              >
                <path
                  id="shipping-truck"
                  d="M25,13.409v5.455a1.091,1.091,0,0,1-1.091,1.091H22.818a3.273,3.273,0,1,1-6.545,0H9.727a3.273,3.273,0,1,1-6.545,0H2.091A1.091,1.091,0,0,1,1,18.864V5.773A3.273,3.273,0,0,1,4.273,2.5h9.818a3.273,3.273,0,0,1,3.273,3.273V7.955h2.182a3.273,3.273,0,0,1,2.618,1.309l2.618,3.491a.665.665,0,0,1,.076.153l.065.12A1.091,1.091,0,0,1,25,13.409ZM7.545,19.955a1.091,1.091,0,1,0-1.091,1.091A1.091,1.091,0,0,0,7.545,19.955ZM15.182,5.773a1.091,1.091,0,0,0-1.091-1.091H4.273A1.091,1.091,0,0,0,3.182,5.773v12h.851a3.273,3.273,0,0,1,4.844,0h6.305Zm2.182,6.545h4.364l-1.309-1.745a1.091,1.091,0,0,0-.873-.436H17.364Zm3.273,7.636a1.091,1.091,0,1,0-1.091,1.091A1.091,1.091,0,0,0,20.636,19.955ZM22.818,14.5H17.364v3.033a3.273,3.273,0,0,1,4.6.24h.851Z"
                  transform="translate(-1 -2.5)"
                  fill="#ffc700"
                ></path>
              </svg>
              <p className="font-medium text-[13px] text-[#232734]">
                Order Shipped
              </p>
            </div>
            <span className="font-semibold text-[26px] text-warning-200">
              77
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
