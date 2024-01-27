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
import ModalCs from "../ModalCs/ModalCs";
function ProductsCards({ data, type }) {
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState({})
  const addToBascket =(product)=>{
    setProduct(product); //save product info for show in modal
    setOpen(true);//show modal
    console.log(product);
  }
  return (
    <>
      {type !== "slider" ? (
        data?.map((product) => (
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            key={product.id}
            marginBottom={"1rem"}
          >
            <Box className="product-card p-2">
              <Image
                src={product.src}
                alt={product.title}
                width={200}
                height={200}
                loading="lazy"
                quality={80}

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
                <button className="text-sm  m-auto font-medium" onClick={()=>addToBascket(product)}>
                 اضافه کردن به سبد خرید
                </button>
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
             <SwiperSlide key={product.id}>
             <Box className="product-card slider p-2">
               <Image
                 src={product.src}
                 alt={product.title}
                 loading="lazy"
                 quality={70}
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
                اضافه کردن به سبد خرید
                 </Link>
               </Box>
             </Box>
           </SwiperSlide>
          ))}
           
            
          </Swiper>
        </>
      )}
      <ModalCs open={open} setOpen={setOpen} data={product}/>
    </>
  );
}

export default ProductsCards;
