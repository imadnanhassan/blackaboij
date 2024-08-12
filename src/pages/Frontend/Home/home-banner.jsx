import React from 'react'
import { useGetCategoryQuery } from '../../../redux/features/api/category/categoryApi'

export default function HomeBanner() {
  const data = useGetCategoryQuery()
  console.log('data', data)
  return (
    <section>
      <div>home Banner</div>
    </section>
  )
}
