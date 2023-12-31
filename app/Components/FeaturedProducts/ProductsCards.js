"use client";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Rate from "./Rate";
import ActionButton from "./ActionButton";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function ProductsCards({ data, type }) {
  return (
    <>
      {type !== "slider" ? (
        data?.map((product) => (
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            spacing={2}
            key={product.id}
            marginBottom={"1rem"}
          >
            <Box className="product-card p-2">
              <Image
                src={product.src}
                alt={product.title}
                width={200}
                height={200}
                style={{ width: "100%" }}
              />
              <ActionButton />
              <p className="text-center lg:text-1xl lg:p-3 lg:font-semibold">
                {" "}
                {product.title}
              </p>

              <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                {" "}
                <Rate value={product.rate} />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                width={"80%"}
                margin={"auto"}
                marginTop={"0.5rem"}
                className="price"
              >
                <span className="text-xs  font-medium mx-2">
                  ${product.price}
                </span>
                <span className="text-xs  font-medium text-gray-500 mx-2 line-through">
                  ${product.priceOff}
                </span>
              </Box>
              <Box
                justifyContent={"center"}
                width={"100%"}
                className="add-card "
              >
                <Link href={"/"} className="text-sm  m-auto font-medium">
                  ADD TO CARD{" "}
                </Link>
              </Box>
            </Box>
          </Grid>
        ))
      ) : (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints= {
                {
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },}
              }
            className="mySwiper slider-perview"
          >
          {data?.map((product)=>(
             <SwiperSlide>
             <Box className="product-card slider p-2">
               <Image
                 src={product.src}
                 alt={product.title}
                 width={200}
                 height={200}
                 style={{ width: "100%" }}
               />
               <ActionButton />
               <p className="text-center lg:text-1xl lg:p-3 lg:font-semibold">
                 {" "}
                 {product.title}
               </p>

               <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                 {" "}
                 <Rate value={product.rate} />
               </Box>
               <Box
                 display={"flex"}
                 justifyContent={"center"}
                 width={"80%"}
                 margin={"auto"}
                 marginTop={"0.5rem"}
                 className="price"
               >
                 <span className="text-xs  font-medium mx-2">
                   ${product.price}
                 </span>
                 <span className="text-xs  font-medium text-gray-500 mx-2 line-through">
                   ${product.priceOff}
                 </span>
               </Box>
               <Box
                 justifyContent={"center"}
                 width={"100%"}
                 className="add-card "
               >
                 <Link href={"/"} className="text-sm  m-auto font-medium">
                   ADD TO CARD{" "}
                 </Link>
               </Box>
             </Box>
           </SwiperSlide>
          ))}
           
            
          </Swiper>
        </>
      )}
    </>
  );
}

export default ProductsCards;
