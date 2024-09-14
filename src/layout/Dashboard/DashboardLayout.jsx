import React, { useState } from 'react'
import SideBar from './SideBar/SideBar'
import MainContent from './MainContent/MainContent'
import Loader from '../../common/Loader/Loader'
import { useGetProductListQuery } from '../../redux/features/api/product/productApi'

export default function DashboardLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState()
  const { isLoading } = useGetProductListQuery()
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }
  return (
    <>
      {isLoading ? (
        <Loader lable="Loading" />
      ) : (
        <>
          <div className="flex h-screen">
            <SideBar isSideBarOpen={isSideBarOpen} />
            <MainContent
              isSideBarOpen={isSideBarOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>
        </>
      )}
    </>
  )
}
