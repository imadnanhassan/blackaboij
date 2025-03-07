import { useForm } from 'react-hook-form'
import { IoIosSearch } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/features/cart/cartSlice'

export default function Button({ text, onClick, className, icon: Icon }) {
  return (
    <button className={className} onClick={onClick} type="submit">
      {Icon && <Icon className="hidden lg:block" />}
      <span className="text-sm">{text}</span>
    </button>
  )
}

// shop button here
export function AnimatedButton({ buttonText }) {
  return (
    <div className="relative inline-flex items-center justify-center md:px-10  md:py-3 px-6 py-2 hover:text-black overflow-hidden font-custom font-medium tracking-tighter text-white bg-black  group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded group-hover:w-full group-hover:h-56"></span>
      <span className="relative whitespace-nowrap md:text-[16px]  text-[12px] ">
        {buttonText}
      </span>
    </div>
  )
}

// Buy Now button here
export function BuyNowButton({ buttonText, product }) {
  const navigate = useNavigate()
  const dispatch = useDispatch() 

  const handleAddProduct = () => {
    dispatch(addProduct({ product })) 
    navigate('/checkout') 
  }

  return (
    <div
      onClick={handleAddProduct} // Call the function directly
      className="md:hover:animate-pulse cursor-pointer"
    >
      <div className="relative inline-flex items-center justify-center md:px-10 md:py-3 px-[5px] py-[1px] hover:text-white overflow-hidden font-custom font-medium tracking-tighter text-black bg-white group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded group-hover:w-full group-hover:h-56"></span>
        <span className="relative whitespace-nowrap md:text-[16px] text-[12px]">
          {buttonText}
        </span>
      </div>
    </div>
  )
}

// Search page Buy Now button here
export function SearchBuyNowButton({ buttonText }) {
  return (
    <div className="hover:animate-pulse">
      <Link className="relative inline-flex items-center justify-center md:px-4  md:py-1 px-2 py-1 hover:text-white overflow-hidden font-custom font-medium tracking-tighter text-black bg-white group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black  rounded group-hover:w-full group-hover:h-56"></span>
        <span className="relative whitespace-nowrap md:text-sm text-[12px]">
          {buttonText}
        </span>
      </Link>
    </div>
  )
}

// search functionality button here
export function SearchBtn() {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const onSubmit = data => {
    navigate(`/search?q=${data.search}`, {
      state: { query: data.search },
    })
  }
  return (
    <div className="relative ">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="search"
          placeholder="Search Here"
          autoComplete="off"
          {...register('search', {
            required: true,
          })}
          className="w-[250px] py-1 p-4 bg-transparent border border-[#383838] rounded-[20px] text-white focus:outline-none"
        />
        <button
          type="submit"
          className="absolute top-[10px] text-white ml-[-25px]"
        >
          <IoIosSearch />
        </button>
      </form>
    </div>
  )
}
