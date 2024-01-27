import { Box, Grid } from '@mui/material'
import React from 'react'
import Counter from './Counter'
import ProductsCards from '../FeaturedProducts/ProductsCards'
import img1 from "@/public/1.jpg";
import img2 from "@/public/2.jpg";
import img3 from "@/public/3.jpg";
import img4 from "@/public/4.jpg";
import img5 from "@/public/5.jpg";
import img6 from "@/public/6.jpg";
import "@/app/Components/DealDay/style.css"
function DealDay({title}) {
    const productData = [
        {
          id: "p-1",
          title: "گل رز سفید",
          rate: 4,
          price: "80.00",
          priceOff: "90.00",
          src: img1,
        },
        {
          id: "p-2",
          title: "گل شکوفه",
          rate: 2,
          price: "30.00",
          priceOff: "35.00",
          src: img2,
        },
        {
          id: "p-3",
          title: "دسته گل",
          rate: 1,
          price: "50.00",
          priceOff: "55.00",
          src: img3,
        },
        {
          id: "p-4",
          title: "گل رز",
          rate: 5,
          price: "90.00",
          priceOff: "100.00",
          src: img4,
        },
        {
            id: "p-6",
            title: "گل رز سفید",
            rate: 4,
            price: "80.00",
            priceOff: "90.00",
            src: img1,
          },
          {
            id: "p-7",
            title: "گل شکوفه",
            rate: 2,
            price: "30.00",
            priceOff: "35.00",
            src: img2,
          },
          {
            id: "p-8",
            title: "گل رز",
            rate: 1,
            price: "50.00",
            priceOff: "55.00",
            src: img3,
          },
          {
            id: "p-9",
            title: "دسته گل",
            rate: 3,
            price: "90.00",
            priceOff: "100.00",
            src: img4,
          },
      ];
  return (
    <div className='deal-day'>
        <p className='py-3 lg:text-4xl text-2xl text-center'>{title}</p>
        <Box>
            
            <Grid container spacing={2} display={'flex'} justifyContent={'center'}>
                <Grid item xs={8}>
                    <Grid container>
                        <ProductsCards data={productData} type={'slider'}/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default DealDay