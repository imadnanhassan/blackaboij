import { Outlet } from 'react-router-dom'
import FrontendHeader from '../../shared/Frontend/FrontendHeader'
import FrontendFooter from '../../shared/Frontend/FrontendFooter'
import ScrollToTopButton from '../../common/ScrollToTopButton/ScrollToTopButton'
import { useGetMenuCategoryQuery } from '../../redux/features/api/category/categoryApi'
import CartDrawer from '../../pages/Frontend/CartDrawer/CartDrawer'
import FrontLoader from '../../common/FrontLoader/FrontLoader'

export default function FrontendLayout() {
  const { data: categories, isLoading } = useGetMenuCategoryQuery()
  const categoryList = categories?.categories ?? []


  if (isLoading) {
    return <FrontLoader />
  }

  return (
    <>
      <FrontendHeader categoryList={categoryList} />
      <Outlet  />
      <FrontendFooter />
      <ScrollToTopButton />
      <CartDrawer />
    </>
  )
}
