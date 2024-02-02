'use client'
import React, { useState } from "react";
import DashboardLayout from "../layout";
import uuid from "react-uuid";
import { Box, Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useSWR from "swr";
import Image from "next/image";
import { GrEdit } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import EditModalHandler from "./EditModalHandler";

function Users() {
  const userColumn = [
    {
      field: "code",
      headerName: 'کد پرسنلی',
      type: "number",
      align: "left",
      headerAlign: "left",
      minWidth: 180,
      flex: 1,
      editable: false,
      renderCell: () => {
        return 879654;
      },
    },
    {
      field: "Profile",
      headerName: "عکس کاربر",
      align: "left",
      headerAlign: "left",
      minWidth: 180,
      flex: 1,
      editable: false,
      renderCell:(params)=>{
        const imageSrc=params.row.Profile;
        return <Image src={imageSrc} width={60} height={60}/>
      }
    },
    {
      field: "userName",
      headerName: "نام کاربر",
      align: "left",
      headerAlign: "left",
      minWidth: 100,
      flex: 1,
      editable: false,
    },
    {
      field: "email",
      headerName: " ایمیل",
      align: "left",
      headerAlign: "left",
      minWidth: 100,
      flex: 1,
      editable: false,
    },
    {
      field: "phone",
      headerName: " شماره تماس",
      align: "left",
      headerAlign: "left",
      minWidth: 100,
      flex: 1,
      editable: false,
    },
    {
      field: "status",
      headerName: "وضعیت",
      align: "left",
      headerAlign: "left",
      minWidth: 100,
      flex: 1,
      editable: false,
      renderCell:(params)=>{
        const statusType=params?.row?.status;
        if(statusType==="فعال"){
          return <span className="bg-green-700 text-white p-1 rounded-lg">فعال</span>
        }else if(statusType==="غیرفعال"){
          return <span className="bg-red-700 text-white p-1 rounded-lg">غیر فعال</span>
        }else{
          return <span className="bg-orange-700 text-white p-1 rounded-lg">درانتظار تایید</span>
        }
      }
    },
    {
      field: "role",
      headerName: "نقش",
      align: "left",
      headerAlign: "left",
      minWidth: 100,
      flex: 1,
      editable: false,
    },
    {
      field: "action",
      headerName: "عملیات",
      align: "left",
      headerAlign: "left",
      minWidth: 100,
      flex: 1,
      editable: false,
      renderCell:(params)=>{
        return <Box width={'100%'} display={'flex'} > 
          <Button onClick={()=>EditHandler(params.row)}><GrEdit   fontSize={18} color="blue" className=""/></Button>
          <Button> <MdDeleteSweep  fontSize={18} color="red"/> </Button>

        </Box>
      }
    },
  ];
  const EditHandler=(rowData)=>{
    setOpen(true);
    setEditData(rowData)
  }


  const api = "http://localhost:3000/api/user";
  const fetcher=async()=>await fetch(api).then((res)=>res.json());

  const{data}=useSWR("dashboard/users",fetcher);
  const userRow =data?data.defultUsers:[];
  //modal state mangment
  const [open, setOpen] = React.useState(false);

  //modal data
  const [editData, setEditData] = useState(null)
  return (
    <>
      <Grid container spacing={2} display={"flex"} justifyContent={"center"} my={"1rem"}>
        <Grid item xs={11} lg={11}>
          <DataGrid sx={{height:'25rem'}} rows={userRow} columns={userColumn} hideFooter={true} />
        </Grid>
      </Grid>
      <EditModalHandler open={open} setOpen={setOpen} data={editData}/>
    </>
  );
}

export default Users;
