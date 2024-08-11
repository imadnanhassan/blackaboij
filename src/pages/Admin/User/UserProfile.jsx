import React from 'react'
import { useSelector } from 'react-redux'
import images from '../../../assets/img/images'

export default function UserProfile() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  return (
    <section
      className={` ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <div className=" ">
        <div className="relative ">
          <img
            src={images.userprofile}
            alt=""
            className=" w-full mx-auto h-[250px] "
          />

          <div className="absolute bottom-0 left-0 flex items-center  gap-5 pb-4 px-5">
            <div className="rounded">
              <img
                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/14.png"
                alt=""
                className="rounded-lg lg:w-[120px] border-4 border-white -mt-6 ml-6"
              />
            </div>
            <div className="mt-3 ">
              <h3 className="py-1 text-xl font-bold text-white">
                Adnan Hassan
              </h3>
              <h4 className="py-1 text-white">Admin</h4>
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
                  <p className="font-light text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos animi vitae illum reiciendis dolores accusantium
                    vel maxime similique quaerat recusandae.
                  </p>
                  <p className="font-light text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos animi vitae illum reiciendis dolores accusantium
                    vel maxime similique quaerat recusandae.
                  </p>
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
                          <strong>Designation </strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong> Super Admin
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-2 py-1">
                          <strong>Joined</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong>
                          01 Feb 2024
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
                          <strong>State</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong> Canada
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className={` rounded-sm w-full  ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText'}`}
            >
              <div className="box-body space-y-3">
                <h5>Basic Information</h5>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 w-[150px]">
                        <strong>Full Name </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> Adnan Hassan
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Joined</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        01 Feb 2024
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
                        <strong>State</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> Canada
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
              Skill
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
