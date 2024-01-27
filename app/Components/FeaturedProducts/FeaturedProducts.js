import React from "react";
import { Grid,Box } from "@mui/material";
import { fetch, Agent } from 'undici'

import ProductsCards from "./ProductsCards";
import '@/app/Components/FeaturedProducts/style.css';

const getProduct =async()=>{
    const baseUrl='http://localhost:3000'
  const api =`${baseUrl}/api/products`
  const res =await fetch(api,{
      dispatcher: new Agent({
          keepAliveTimeout: 10,
          keepAliveMaxTimeout: 10
      }),cache: 'no-store',  method: 'GET',})
  if(!res.ok){
    throw new Error('Failed to fetch data  getProduct')
  }
  return res.json()
}


export default async function FeaturedProducts({ title, badget }) {
 
  const  {productData}=await getProduct();
 
  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"} mt={'4rem'}>
      <Box width={'100%'}>
        
        <p className="text-red-600 font-medium text-xs text-center py-2">{badget}</p>
        <p className="text-black font-semibold  text-2xl lg:text-4xl text-center py-2"> {title}</p>
      </Box>
      <Grid item xs={8} className="mt-5 mb-5">
        <Grid container display={"flex"} justifyContent={"center"}>
          <ProductsCards data={productData?productData:[]} type={'cards'}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

