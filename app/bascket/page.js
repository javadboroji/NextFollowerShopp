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
  const reduxShoppingProducts = JSON.parse(
    localStorage.getItem("shoppingCart")
  );
  const rows = reduxShoppingProducts.map((product) => ({
    ...product.data,
    count: product.count,
  }));

  const [newShoppItems, setNewShoppItems] = useState([])
const RemoveShoppingCart=(params)=>{
  setNewShoppItems(()=>reduxShoppingProducts.filter((product)=>params.id !== product.id))
}

  const columns = [
    {
      field: "image",
      headerName: "image",
      width: 180,
      editable: false,
      renderCell: (params) => {
        return <Image src={params.row.src.src} width={48} height={48}alt={"image"} />;
      },
    },
    {
      field: "title",
      headerName: "name",
      type: "string",
      editable: false,
      align: "left",
    },
    {
      field: "price",
      headerName: "price",
      type: "number",
      minWidth: 250,
      flex: 1,
      editable: false,
    },
    {
      field: "count",
      headerName: "count",
      type: "number",
      minWidth: 180,
      flex: 1,
      editable: false,
    },
    {
      field: "total",
      headerName: "total",
      type: "number",
      minWidth: 180,
      flex: 1,
      editable: false,
    },
    {
      field: "Remove",
      headerName: "Remove",
      minWidth: 180,
      flex: 1,
      renderCell: (params) => {
        return (
          <IconButton onClick={()=>RemoveShoppingCart(params)}>
            {" "}
            <DeleteIcon />{" "}
          </IconButton>
        );
      },
    },
  ];
  useEffect(() => {
    console.log(newShoppItems)

  }, [newShoppItems])
  
  return (
    <>
      <HeaderCS />
      <div className="h-full">
        {/* Banner */}
        <div className="page-banner">
          <h1 className="text-5xl text-slate-50"> Shopping</h1>
        </div>
        {/* data grid */}
        <Grid container display={"flex"} justifyContent={"center"} my={"5rem"}>
          <Grid item xs={11} lg={10}>
            <DataGrid rows={rows} columns={columns} />
          </Grid>
          {/* coupen */}
          <Grid item xs={11} lg={10} display={"flex"} my={"3rem"}>
            <TextField />
            <Button variant="outlined" sx={{ marginLeft: "1rem" }}>
              {" "}
              Apply coupen
            </Button>
          </Grid>
          {/*  checkOut */}
          <Grid item xs={11} lg={10} display={"flex"} my={"3rem"}>
            <div className="border-solid border-2  border-gray-200 p-3 rounded-lg flex flex-col w-1/2">
              <div className="flex">
                <span className="text-lg font-semibold py-2">
                  {" "}
                  Cart Totals :
                </span>
                <span></span>
              </div>
              <div className="flex">
                <span className="text-lg font-semibold py-2">
                  {" "}
                  sub Totals :
                </span>
                <span></span>
              </div>
              <div className="flex">
                <span className="text-lg font-semibold py-2"> Total :</span>
                <span></span>
              </div>
              <Button
                variant="outlined"
                sx={{ marginLeft: "1rem", marginTop: "1rem" }}
              >
                {" "}
                Proceed To checkouut
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
