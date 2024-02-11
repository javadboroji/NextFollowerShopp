"use client";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import uuid4 from "react-uuid";
function ProductInpForm({rows ,setRows}) {
 const initialValueCu={
  title: "",
  price: "",
    productCount: "",
 }


  return (
    <div className="flex p-3  justify-center items-baseline flex-wrap ">
      <Formik initialValues={initialValueCu} onSubmit={(data)=>setRows([...rows,{...data,id:uuid4()}])}>
        {(props) => 
          (<Form className="w-full flex-col lg:flex-row items-center flex p-0">
            <input
              name="title"
              className="border-2 border-gray-400 p-2  rounded-md m-2 w-full lg:w-1/4"
              placeholder="نام محصول"
              value={props.values?.productName}
              onChange={props.handleChange}
            />
            <input
              name="price"
              className="border-2 border-gray-400 p-2  rounded-md m-2  mx-2w-full lg:w-1/4"
              placeholder="قیمت"
              value={props.values?.price}
               onChange={props.handleChange}
            />
            <input
              name="productCount"
              className="border-2 border-gray-400 p-2  rounded-md m-2 w-full lg:w-1/4"
              placeholder="تعداد"
              value={props.values?.productCount}
               onChange={props.handleChange}
            />
            <Button sx={{padding:'0.5rem 0 !important'}} className=" flex-auto lg:w-[10%]" variant="outlined" type="submit">
              {" "}
              ارسال
            </Button>
          </Form>)
        }
      </Formik>
    </div>
  );
}

export default ProductInpForm;
