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

//setRows([...rows,{...data,id:uuid4()}])

  return (
    <div className="flex p-3  justify-center items-center flex-wrap ">
      <Formik initialValues={initialValueCu} onSubmit={(data)=>setRows([...rows,{...data,id:uuid4()}])}>
        {(props) => 
          (<Form className="w-full flex-col lg:flex-row flex p-0">
            <input
              name="title"
              className="border-2 border-gray-400 p-2  rounded-md m-2 w-full lg:w-1/4"
              placeholder="productName"
              value={props.values?.productName}
              onChange={props.handleChange}
            />
            <input
              name="price"
              className="border-2 border-gray-400 p-2  rounded-md m-2  mx-2w-full lg:w-1/4"
              placeholder="productPrice"
              value={props.values?.price}
               onChange={props.handleChange}
            />
            <input
              name="productCount"
              className="border-2 border-gray-400 p-2  rounded-md m-2 w-full lg:w-1/4"
              placeholder="productCount"
              value={props.values?.productCount}
               onChange={props.handleChange}
            />
            <Button className="py-2" variant="outlined" type="submit">
              {" "}
              Submit
            </Button>
          </Form>)
        }
      </Formik>
    </div>
  );
}

export default ProductInpForm;
