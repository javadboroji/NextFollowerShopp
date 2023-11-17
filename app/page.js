import Image from 'next/image'
import HeaderCS from './Components/HeaderCS'
import BannerSlider from './Components/BannerSlider'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import DealDay from './Components/DealDay/DealDay'

export default function Home() {
  return (
   
    <>
       <HeaderCS />
      <BannerSlider />
      <FeaturedProducts title={'FEATURED PRODUCTS'} badget={"Wonderful gift"}/>
      <DealDay title={'DEAL OF THE DAY'}/>
    </>
  )
}
