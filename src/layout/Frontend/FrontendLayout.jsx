import { Outlet } from 'react-router-dom'
import FrontendHeader from '../../shared/Frontend/FrontendHeader'
import FrontendFooter from '../../shared/Frontend/FrontendFooter'
import ScrollToTopButton from '../../common/ScrollToTopButton/ScrollToTopButton'
import { useGetMenuCategoryQuery } from '../../redux/features/api/category/categoryApi'
import Loader from '../../common/Loader/Loader'
import CartDrawer from '../../pages/Frontend/CartDrawer/CartDrawer'

export default function FrontendLayout() {
  const { data: categories, isLoading } = useGetMenuCategoryQuery()
  const categoryList = categories?.categories ?? []
  console.log(categoryList) // For debugging purposes only

  if (isLoading) {
    return <Loader lable="Loading" />
  }

  return (
    <>
      <FrontendHeader categoryList={categoryList} />
      <Outlet />
      <FrontendFooter />
      <ScrollToTopButton />
      <CartDrawer />
    </>
  )
}
