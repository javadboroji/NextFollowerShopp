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
          <h1 className="text-5xl text-slate-50"> درباه ما</h1>
        </div>
        <div className="container flex flex-col mx-auto px-4">
        <Grid container spacing={3} my={4} display={'flex'}  alignItems={'center'} flexDirection={'row-reverse'}>
          <Grid item xs={12} lg={6}  >
              <h2 className="text-4xl font-semibold mb-6 pt-3">تولد و هدایا</h2>
              <span className="text-sm font-medium ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </span>
          </Grid>
          <Grid xs={12} lg={6} px={4} >
            <div className="relative overflow-hidden" style={{paddingTop:'86%'}}>
            <Image src={image1} alt="img" loading="lazy"   placeholder="blur" quality={0} fill style={{ width:'100%' ,height:'100%' ,objectFit:"cover"}}/>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} my={4} display={'flex'} alignItems={'center'} sx={{}} flexDirection={'row-reverse'}>
        <Grid xs={12} lg={6} px={4}>
            <div className="relative overflow-hidden" style={{paddingTop:'66%'}}>
            <Image src={image1} alt="img" fill loading="lazy"  placeholder="blur" quality={50} style={{ width:'100%' ,height:'100%' ,objectFit:"cover"}}/>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
              <h2 className="text-4xl font-semibold mb-6 pt-3">روز عروسی</h2>
              <span className="text-sm font-medium ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
