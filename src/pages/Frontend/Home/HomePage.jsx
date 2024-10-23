import useScrollToTop from '../../../hooks/useScrollToTop'
import HomeAllShades from './home-allShades'
import HomeBanner from './home-banner'
import HomeBlackFridaySale from './home-blackFriday'
import HomeHotSale from './home-hotsale'
import HomeNewArrivals from './home-newArrivals'
import NewsLatter from './home-newsLatter'

export default function HomePage() {
  useScrollToTop();
  return (
    <>
    
      <HomeBanner />
      <HomeNewArrivals></HomeNewArrivals>
      <HomeBlackFridaySale></HomeBlackFridaySale>
      <HomeHotSale></HomeHotSale>
      <NewsLatter></NewsLatter>
      <HomeAllShades></HomeAllShades>
    </>
  )
}
