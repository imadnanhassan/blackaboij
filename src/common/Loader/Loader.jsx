import React from 'react'
import './Loader.css'
import { PuffLoader } from 'react-spinners'

export default function Loader({ lable }) {
  return (
    <>
      <div className="bg-black h-[100vh] flex gap-3 flex-col justify-center items-center">
        <PuffLoader
          color="#fff"
          cssOverride={{}}
          loading
          size={99}
          speedMultiplier={1}
        />
        <div className="dot-animate text-2xl text-white font-bold py-2 px-4 rounded ">
          {lable}
        </div>
      </div>
    </>
  )
}
