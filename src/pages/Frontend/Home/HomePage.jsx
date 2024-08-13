import HomeAllShades from './home-allShades'
import HomeBanner from './home-banner'
import HomeBlackFridaySale from './home-blackFriday'
import HomeHotSale from './home-hotsale'
import HomeJustDropped from './home-justDropped'
import NewsLatter from './home-newsLatter'

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeJustDropped></HomeJustDropped>
      <HomeBlackFridaySale></HomeBlackFridaySale>
      <HomeHotSale></HomeHotSale>
      <NewsLatter></NewsLatter>
      <HomeAllShades></HomeAllShades>
    </>
  )
}
