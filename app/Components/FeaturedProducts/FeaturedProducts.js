import React from "react";
import { Grid,Box } from "@mui/material";
import img1 from "@/public/1.jpg";
import img2 from "@/public/2.jpg";
import img3 from "@/public/3.jpg";
import img4 from "@/public/4.jpg";
import img5 from "@/public/5.jpg";
import img6 from "@/public/6.jpg";
import ProductsCards from "./ProductsCards";
import '@/app/Components/FeaturedProducts/style.css'
function FeaturedProducts({ title, badget }) {
  const productData = [
    {
      id: "p-1",
      title: "Flowers daisy pink stick",
      rate: 4,
      price: "80.00",
      priceOff: "90.00",
      src: img1,
    },
    {
      id: "p-2",
      title: "Blossom bouquet flower",
      rate: 2,
      price: "30.00",
      priceOff: "35.00",
      src: img2,
    },
    {
      id: "p-3",
      title: "Rose bouquet white",
      rate: 1,
      price: "50.00",
      priceOff: "55.00",
      src: img3,
    },
    {
      id: "p-4",
      title: "Glory of the Snow",
      rate: 5,
      price: "90.00",
      priceOff: "100.00",
      src: img4,
    },
    {
        id: "p-6",
        title: "Flowers daisy pink stick",
        rate: 4,
        price: "80.00",
        priceOff: "90.00",
        src: img1,
      },
      {
        id: "p-7",
        title: "Blossom bouquet flower",
        rate: 2,
        price: "30.00",
        priceOff: "35.00",
        src: img2,
      },
      {
        id: "p-8",
        title: "Rose bouquet white",
        rate: 1,
        price: "50.00",
        priceOff: "55.00",
        src: img3,
      },
      {
        id: "p-9",
        title: "Glory of the Snow",
        rate: 3,
        price: "90.00",
        priceOff: "100.00",
        src: img4,
      },
  ];
  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"} mt={'4rem'}>
      <Box width={'100%'}>
        
        <p className="text-red-600 font-medium lg:text-2xl text-center py-2">{badget}</p>
        <p className="text-black lg:font-semibold text-2xl lg:text-4xl text-center py-2"> {title}</p>
      </Box>
      <Grid item xs={8} className="mt-5 mb-5">
        <Grid container display={"flex"} justifyContent={"center"}>
          <ProductsCards data={productData} type={'cards'}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FeaturedProducts;
