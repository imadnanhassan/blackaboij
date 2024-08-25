import React from 'react'
import CustomerSidebar from '../../../components/Frontend/Customer/CustomerSidebar/CustomerSidebar'

import { Outlet } from 'react-router-dom'

export default function CustomerPanel() {
  return (
    <>
      <div className="es_container py-8 px-3">
        <div className="flex  gap-3">
          <CustomerSidebar />
          <section className='w-full'>
            <Outlet />
          </section>
        </div>
      </div>
    </>
  )
}
