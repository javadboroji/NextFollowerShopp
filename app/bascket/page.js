"use client";
import React from "react";
import FooterCs from "../Components/FooterCs";
import HeaderCS from "../Components/HeaderCs/HeaderCS";
import uuid from 'react-uuid';
import "./style.css";

//datagride
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { InputOutlined, TextFieldsOutlined } from "@mui/icons-material";


//redux
import { useSelector } from "react-redux";
function Bascket() {
  /**=======================
   *
   * Data Grid
   *
   *
   *========================**/
  const reduxShoppingProducts =JSON.parse(localStorage.getItem('shoppingCart'))
  const rows =reduxShoppingProducts.map(product=>({...product.data,count:product.count}));
  
  console.log(rows);
  const columns = [
    { field: "image", headerName: "image", width: 180, editable: false },
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
      width: 180,
      editable: false,
      
    },
    {
      field: "count",
      headerName: "count",
      type: "number",
      width: 180,
      editable: false,
    },
    {
      field: "total",
      headerName: "total",
      type: "number",
      width: 180,
      editable: false,
    },
    {
        field: "Remove",
        headerName: "Remove",
        width: 180,
        renderCell:()=>{return<IconButton> <DeleteIcon /> </IconButton>}
    }
  ];
  // const rows = [
  //   {
  //     id: 1,
  //     name: "Follower",
  //     image: "",
  //     price: 500000,
  //     count: 2,
  //     total: 100000,
  //   },
  //   {
  //     id: 3,
  //     name: "Follower",
  //     image: "",
  //     price: 500000,
  //     count: 2,
  //     total: 100000,
  //   },
  //   {
  //     id: 4,
  //     name: "Follower",
  //     image: "",
  //     price: 500000,
  //     count: 2,
  //     total: 100000,
  //   },
  // ];
  return (
    <>
      <HeaderCS />
      <div className="h-full">
        {/* Banner */}
        <div className="page-banner">
          <h1 className="text-5xl text-slate-50"> Shopping</h1>
        </div>
        {/* data grid */}
        <Grid container display={"flex"} justifyContent={"center"} my={'5rem'}>
          <Grid item xs={11} lg={10}>
            <DataGrid rows={rows} columns={columns} />
          </Grid>
          {/* coupen */}
          <Grid item xs={11} lg={10} display={'flex'} my={'3rem'}>
                <TextField />
                <Button variant="outlined" sx={{marginLeft:'1rem'}}> Apply coupen</Button>
          </Grid>
          {/*  checkOut */}
          <Grid item xs={11} lg={10} display={'flex'} my={'3rem'}>
            <div className="border-solid border-2  border-gray-200 p-3 rounded-lg flex flex-col w-1/2">
              <div className="flex">
              <span className="text-lg font-semibold py-2"> Cart Totals :</span><span></span>
              </div>
              <div className="flex">
              <span className="text-lg font-semibold py-2"> sub Totals :</span><span></span>
              </div>
              <div className="flex">
              <span className="text-lg font-semibold py-2">  Total :</span><span></span>
              </div>
              <Button variant="outlined" sx={{marginLeft:'1rem' ,marginTop:'1rem'}}> Proceed To checkouut</Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <FooterCs />
    </>
  );
}

export default Bascket;
