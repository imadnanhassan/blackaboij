import { Outlet } from 'react-router-dom'
import HeaderMenu from '../../../shared/header/HeaderMenu'
import Footer from '../../../shared/footer/Footer'

export default function MainContent({ toggleSidebar }) {
  return (
    <div className="flex-1 bg-[#F2F6F9] overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-lg ">
      <HeaderMenu toggleSidebar={toggleSidebar} />

      <main className="min-h-[calc(100vh-140px)] overflow-hidden">
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}
