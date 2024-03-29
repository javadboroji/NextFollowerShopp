"use client";
import React, { useEffect, useState } from "react";
import FooterCs from "../Components/FooterCs";
import HeaderCS from "../Components/HeaderCs/HeaderCS";
import uuid from "react-uuid";
import "./style.css";

//datagride
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { InputOutlined, TextFieldsOutlined } from "@mui/icons-material";

//redux
import { useSelector } from "react-redux";
import Image from "next/image";
function Bascket() {
  /**=======================
   *
   * Data Grid
   *
   *
   *========================**/
  const reduxShoppingProducts =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("shoppingCart"))
      : [];

  const [rows, setRows] = useState([]);

  const RemoveShoppingCart = (params) => {
    if (typeof window !== "undefined") {
      const updateProdct = reduxShoppingProducts.filter(
        (product) => params.row.id !== product.id
      );
      setRows(updateProdct);

      localStorage.setItem("shoppingCart", JSON.stringify(updateProdct));
      
    }
  };

  const columns = [
    {
      field: "image",
      headerName: "تصویر",
      width: 180,
      editable: false,
      renderCell: (params) => {
        return (
          <Image
            src={params.row.src.src}
            width={48}
            height={48}
            alt={"image"}
          />
        );
      },
    },
    {
      field: "title",
      headerName: "نام",
      minWidth: 200,
      flex: 1,
      type: "string",
      editable: false,
      align: "left",
    },
    {
      field: "price",
      headerName: "قیمت",
      type: "number",
      minWidth: 200,
      align: "left",
      headerAlign: "left",
      flex: 1,
      editable: false,
    },
    {
      field: "counter",
      headerName: "تعداد",
      type: "number",
      minWidth: 180,
      align: "left",
      headerAlign: "left",
      flex: 1,
      editable: false,
    },
    {
      field: "total",
      headerName: "جمع کل",
      type: "number",
      align: "left",
      headerAlign: "left",
      minWidth: 180,
      flex: 1,
      editable: false,
      renderCell: (params) => {
        return params.row.price * params.row.counter;
      },
    },
    {
      field: "Remove",
      headerName: "حذف کردن",
      minWidth: 180,
      flex: 1,
      renderCell: (params) => {
        return (
          <IconButton onClick={() => RemoveShoppingCart(params)}>
            {" "}
            <DeleteIcon />{" "}
          </IconButton>
        );
      },
    },
  ];

  /**==============================================
   *                computing Price For checkout
   *
   *
   *=============================================**/
  const [sumTotal, setSumTotal] = useState([]);
  const [sumCounter, setSumCounter] = useState([]);
  const [tax, setTax] = useState("");
  useEffect(() => {
    const totalPrice = rows?.map((product) => {
      return product.price * product.counter;
    });
  
    const totalCounter = rows?.map((product) => {
      return product.counter;
    });

    setSumTotal(() => totalPrice.reduce((a, b) => a + b, 0)); // ToDo: sum all Pricee from Rows

    setSumCounter(() => totalCounter.reduce((a, b) => a + b, 0)); //ToDo :sum all cunter poduct exact in Bascket

    setTax(() => sumTotal * 0.07 + sumTotal); //ToDo :tax total Price

    setRows(
      reduxShoppingProducts.map((product) => ({
        ...product,
      }))
    );
  }, []);

  return (
    <>
      <HeaderCS />
      <div className="h-full">
        {/* Banner */}
        <div className="page-banner">
          <h1 className="text-5xl text-slate-50"> سبد خرید</h1>
        </div>
        {/* data grid */}
        <Grid container display={"flex"} justifyContent={"center"} my={"5rem"}>
          <Grid item xs={11} lg={10}>
            <DataGrid rows={rows} columns={columns} hideFooter={true} />
          </Grid>
          {/* coupen */}
          <Grid item xs={11} lg={10} display={"flex"} my={"3rem"}>
            <TextField label="کد تخفیف" fullWidth />
            <Button
              variant="outlined"
              sx={{ marginLeft: "1rem", fontSize: "14px", width: "16rem" }}
            >
              {" "}
              اعمال کردن کد تخفیف
            </Button>
          </Grid>
          {/*  checkOut */}
          <Grid item xs={11} lg={10} display={"flex"} my={"3rem"}>
            <div className="border-solid border-2  border-gray-200 p-3 rounded-lg flex flex-col w-1/2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold py-2"> تعداد :</span>
                <span className="text-lg font-semibold py-2">
                  {" "}
                  {sumCounter}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg font-semibold py-2"> حمل نقل :</span>
                <span className="text-lg font-semibold py-2">
                  ازطریق پست
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold py-2"> قیمت کل :</span>
                <span className="text-lg font-semibold py-2">
                  {" "}
                  {sumTotal} تومان
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg font-semibold py-2">
                  {" "}
                  قیمت نهایی با مالیت :
                </span>
                <span className="text-lg font-semibold py-2">{tax} تومان</span>
              </div>
              <Button
                variant="outlined"
                sx={{ marginLeft: "1rem", marginTop: "1rem", fontSize: "24px" ,maxWidth:'15rem'}}
              >
                {" "}
                تسویه حساب
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <FooterCs />
    </>
  );
}

export default Bascket;
