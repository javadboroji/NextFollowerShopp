'use client'
import Image from "next/image";
import HeaderCS from "./Components/HeaderCs/HeaderCS";
import BannerSlider from "./Components/BannerSlider";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import DealDay from "./Components/DealDay/DealDay";
import FooterCs from "./Components/FooterCs";
import { Provider } from "react-redux";
import { store } from "./store/store";
export default function Home() {
  return (
    <>
        <HeaderCS />
        <BannerSlider />
        <FeaturedProducts
          title={"FEATURED PRODUCTS"}
          badget={"Wonderful gift"}
        />
        <DealDay title={"DEAL OF THE DAY"} />
        <FooterCs />
    </>
  );
}
