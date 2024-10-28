import { Helmet } from 'react-helmet-async'
import useScrollToTop from '../../../hooks/useScrollToTop'
import HomeAllShades from './home-allShades'
import HomeBanner from './home-banner'
import HomeBlackFridaySale from './home-blackFriday'
import HomeHotSale from './home-hotsale'
import HomeNewArrivals from './home-newArrivals'
import NewsLatter from './home-newsLatter'
import { mainUrl } from '../../../hooks/useMainUrl'

export default function HomePage() {
  useScrollToTop()
  return (
    <>
      <Helmet>
        <title>
          Blackaboij – Blackaboij Ecommerce, your ultimate destination
        </title>
        <link rel="canonical" href={mainUrl} />

        <meta
          name="description"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Blackaboij" />
        {/* facebook / whatsapp  */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={mainUrl} />
        <meta
          property="og:title"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta
          property="og:description"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta property="og:url" content={mainUrl} />
        <meta
          property="og:site_name"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta property="og:image" content="https://i.ibb.co/3sNL27c/logo.png" />
        <meta
          property="og:image:alt"
          content="https://i.ibb.co/3sNL27c/logo.png"
        />
        <meta
          property="og:site_name"
          content="https://i.ibb.co/3sNL27c/logo.png"
        />
        {/* twitter  */}
        <meta
          name="twitter:title"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />
        <meta
          name="twitter: description"
          content="Blackaboij – Blackaboij Ecommerce, your ultimate destination"
        />

        <meta name="theme-color" content="#000" />
      </Helmet>

      <HomeBanner />
      <HomeNewArrivals></HomeNewArrivals>
      <HomeBlackFridaySale></HomeBlackFridaySale>
      <HomeHotSale></HomeHotSale>
      <NewsLatter></NewsLatter>
      <HomeAllShades></HomeAllShades>
    </>
  )
}
