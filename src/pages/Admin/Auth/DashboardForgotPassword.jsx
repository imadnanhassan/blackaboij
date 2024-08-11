import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardForgotPassword() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-violet-600">
      {/* Background image */}
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/background-gradient-lights_23-2149304984.jpg')",
        }}
       
      /> */}

      {/* Glass background */}
      <div className="max-w-lg mx-auto w-full my-10 p-8 rounded-xl shadow shadow-slate-100 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg z-10">
        <h1 className="text-2xl font-medium ">Reset password</h1>
        <p className="text-slate-600 font-light text-sm">Fill up the form to reset the password</p>
        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email address</p>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-primaryColor hover:shadow"
                id="email"
                name="email"
                placeholder="Enter email address"
                type="email"
              />
            </label>
            <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Send Reset password</span>
            </button>
            <p className="text-center">
              Not registered yet?{' '}
              <Link
                className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                to={'/dashboard/signup/'}
              >
                <span>Register now </span>
                <span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
