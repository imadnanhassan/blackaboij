import { Link } from 'react-router-dom'
import images from '../../../assets/img/images'
// import { toast } from 'react-toastify'
// import { useForm } from 'react-hook-form'
// import { useAddLoginMutation } from '../../../redux/features/api/signin/signinApi'

export default function SignIn() {
  // const [showPassword, setShowPassword] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const [rememberMe, setRememberMe] = useState(false)
  // const [addLogin] = useAddLoginMutation()
  // const navigate = useNavigate()

  // const {
  //   register,
  //   handleSubmit: onSubmitHandler,
  //   formState: { errors },
  // } = useForm()

  // const onSubmit = async data => {
  //   try {
  //     setLoading(true)

  //     const response = await addLogin(data)
  //     if (response?.data?.message) {
  //       toast.success(`${response?.data.message}`, {
  //         position: 'top-right',
  //         autoClose: 3000,
  //       })
  //       navigate('/dashboard')

  //       if (rememberMe) {
  //         localStorage.setItem('userData', JSON.stringify(response?.data))
  //       }
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const handleRememberMeChange = e => {
  //   setRememberMe(e.target.checked)
  // }
  // const togglePasswordVisibility = () => {
  //   setShowPassword(prevState => !prevState)
  // }

  return (
    <section className="h-screen ">
      <div className="font-[sans-serif] bg-[#0C172C] text-[#333] md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-screen">
          <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tr-[55px] md:rounded-br-[55px] h-full">
            <form
              className="max-w-lg w-full mx-auto"
              // onSubmit={onSubmitHandler(onSubmit)}
            >
              <div className="mb-12">
                <h3 className="text-4xl font-extrabold">Sign in</h3>
                {/* <p className="text-sm mt-4 ">
                  Don't have an account{' '}
                  <Link
                    to={'/dashboard/signup'}
                    className="text-primaryColor font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p> */}
              </div>
              <div>
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    // {...register('email', { required: 'Email is required' })}
                    type="email"
                    placeholder="Enter Email"
                    className="w-full text-sm border-b border-Vindigo-400 focus:border-Vindigo-800 px-2 py-3 outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000" />
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit={10}
                        strokeWidth={40}
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      />
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      />
                    </g>
                  </svg>
                </div>
                {/* {errors.email && (
                  <p className="text-error-200 mt-1 font-extralight">
                    {errors?.email?.message}
                  </p>
                )} */}
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    // type={showPassword ? 'text' : 'password'}
                    // {...register('password', {
                    //   required: 'Password is required',
                    //   validate: value => {
                    //     if (value.length < 7) {
                    //       return 'Password must be at least 8 characters'
                    //     }
                    //   },
                    // })}
                    className="w-full text-sm border-b border-Vindigo-400 focus:border-Vindigo-800 px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                    // onClick={togglePasswordVisibility}
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    />
                  </svg>
                </div>

                {/* {errors.password && (
                  <p className="text-error-200 mt-1 font-extralight">
                    {errors?.password?.message}
                  </p>
                )} */}
              </div>
              <div className="flex items-center justify-between gap-2 mt-5">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-primaryColor focus:ring-blue-500 border-gray-300 rounded"
                    // onChange={handleRememberMeChange}
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    to="/dashboard/signin/forgetpassword"
                    className="text-primaryColor font-semibold text-sm hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mt-12">
                <button
                  type="submit"
                  className="relative w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-primaryColor hover:bg-primaryColor/80 focus:outline-none "
                  // disabled={loading || rememberMe === false}
                >
                  {/* {loading ? 'Loading...' : 'Sign in'} */}Sign in
                </button>
              </div>
            </form>
          </div>

          <div className="max-md:order-1 p-4 hidden sm:block">
            <img
              src={images.login}
              className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
