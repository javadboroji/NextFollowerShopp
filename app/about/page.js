import React from "react";
import HeaderCS from "../Components/HeaderCs/HeaderCS";
import FooterCs from "../Components/FooterCs";
import { Grid } from "@mui/material";
import "@/app/globals.css"
import Image from "next/image";
import image1 from '@/public/bouquet-flowers-suculents-hands-women-mobile-shooting-from-aside.jpg'
function About() {
  return (
    <>
      <HeaderCS />
      <div className="h-full">
        {/* Banner */}
        <div className="page-banner">
          <h1 className="text-5xl text-slate-50"> Aboout</h1>
        </div>
        <div className="container flex flex-col mx-auto">
        <Grid container spacing={3} my={4} display={'flex'}  alignItems={'center'}>
          <Grid item xs={12} lg={6} order={1}>
              <h2 className="text-4xl font-semibold mb-6 pt-3">BIRTHDAY & GIFTS</h2>
              <span className="text-sm font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </span>
          </Grid>
          <Grid xs={12} lg={6} >
            <div className="relative overflow-hidden" style={{paddingTop:'66%'}}>
            <Image src={image1} alt="img" fill style={{position:'absolute' ,top:'50%',left:'50%',transform:'translate(-50%,-50%)' ,width:'100%' ,height:'100%' ,objectFit:"cover"}}/>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} my={4} display={'flex'} alignItems={'center'}>
        <Grid xs={6} >
            <div className="relative overflow-hidden" style={{paddingTop:'66%'}}>
            <Image src={image1} alt="img" fill style={{position:'absolute' ,top:'50%',left:'50%',transform:'translate(-50%,-50%)' ,width:'100%' ,height:'100%' ,objectFit:"cover"}}/>
            </div>
          </Grid>
          <Grid item xs={6}>
              <h2 className="text-4xl font-semibold mb-6 pt-3">WEDDING DAY</h2>
              <span className="text-sm font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </span>
          </Grid>
         
        </Grid>
        </div>
      </div>

      <FooterCs />
    </>
  );
}

export default About;
