import { NextResponse } from "next/server";
import img1 from "@/public/1.jpg";
import img2 from "@/public/2.jpg";
import img3 from "@/public/3.jpg";
import img4 from "@/public/4.jpg";
import img5 from "@/public/5.jpg";
import img6 from "@/public/6.jpg";
const productData = [
    {
      id: "p-1",
      title: "Flowers daisy pink stick",
      description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",
      rate: 4,
      price: "80.00",
      priceOff: "90.00",
      src: img1,
    },
    {
      id: "p-2",
      title: "Blossom bouquet flower",
      description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",
      rate: 2,
      price: "30.00",
      priceOff: "35.00",
      src: img2,
    },
    {
      id: "p-3",
      title: "Rose bouquet white",
      description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",

      rate: 1,
      price: "50.00",
      priceOff: "55.00",
      src: img3,
    },
    {
      id: "p-4",
      title: "Glory of the Snow",
      description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",

      rate: 5,
      price: "90.00",
      priceOff: "100.00",
      src: img4,
    },
    {
        id: "p-6",
        title: "Flowers daisy pink stick",
        description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",

        rate: 4,
        price: "80.00",
        priceOff: "90.00",
        src: img1,
      },
      {
        id: "p-7",
        title: "Blossom bouquet flower",
        description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",

        rate: 2,
        price: "30.00",
        priceOff: "35.00",
        src: img2,
      },
      {
        id: "p-8",
        title: "Rose bouquet white",
        description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",

        rate: 1,
        price: "50.00",
        priceOff: "55.00",
        src: img3,
      },
      {
        id: "p-9",
        title: "Glory of the Snow",
        description:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame bel",

        rate: 3,
        price: "90.00",
        priceOff: "100.00",
        src: img4,
      },
  ];
  export async function GET(req,res){
    return NextResponse.json({productData})
  }