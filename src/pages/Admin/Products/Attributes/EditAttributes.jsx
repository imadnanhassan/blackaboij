import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../../../common/Button/Button'
import { useGetAttributesQuery, useUpdateAttributeMutation } from '../../../../redux/features/api/attribute/attributeApi'
import { useParams } from 'react-router-dom';

export default function EditAttributes() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [updateAttribute]=useUpdateAttributeMutation();
const {attributeId}=useParams();
const {data:attributeData}=useGetAttributesQuery(attributeId);

console.log("attributeData",attributeData);
  return (
    <div
      className={`px-5 py-5 rounded w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <div className="flex gap-5 pb-5">
        <div
          className={` w-full py-4 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="px-5">
            <div className="mb-4">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Attributes Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="productName"
                  name="Attributes Name"
                  placeholder="Liter"
                  className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                />
              </div>
            </div>

            <Button
              text="Submit Value"
              className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
