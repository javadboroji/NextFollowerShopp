import React from "react";
import HeaderCS from "../Components/HeaderCs/HeaderCS";
import FooterCs from "../Components/FooterCs";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "@/app/globals.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
function Contact() {
  return (
    <>
      <HeaderCS />
      <div className="h-full">
        {/* Banner */}
        <div className="page-banner">
          <h1 className="text-5xl text-slate-50"> Contact</h1>
        </div>
        <div className="container flex flex-col mx-auto">
          <Grid container spacing={2} flex flex-col mx-auto mt={8}>
            <Grid item xs={12} lg={6}>
              <h1 className="text-4xl font-semibold">My Web</h1>
              <Box display={'flex '} flexDirection={'column'}>
                <Box flex={1} display={"flex"} justifyContent={"space-between"} my={4}>
                  <TextField
                    required
                    id="outlined-required"
                    label="FirstName"
                    fullWidth
                    sx={{margin:'0 1rem 0 0'}}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="LastName"
                    fullWidth
                    sx={{margin:'0 0 0 1rem'}}
                  />
                </Box>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  fullWidth
                  sx={{my:'1rem'}}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="message"
                  fullWidth
                  sx={{my:'1rem'}}
                />
                <Button variant="outlined" className="px-12 py-3     mb-6 w-1/3">Send</Button>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
                <div className="contact-image-box"></div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center my-2">
                    <div className="bg-blue-400 rounded-full me-4 w-16 h-16 flex justify-center items-center relative">
                        <EmailIcon sx={{color:'#065bd4' ,fontSize:'2rem'}}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">Email</span>
                        <span className="text-sm">info@gmail.com</span>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center my-2">
                    <div className="bg-blue-400 rounded-full me-4 w-16 h-16 flex justify-center items-center relative">
                        <PhoneIcon sx={{color:'#065bd4' ,fontSize:'2rem'}}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">Phone</span>
                        <span className="text-sm">099652365</span>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center my-2">
                    <div className="bg-blue-400 rounded-full me-4 w-16 h-16 flex justify-center items-center relative">
                        <HomeIcon sx={{color:'#065bd4' ,fontSize:'2rem'}}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">Addres</span>
                        <span className="text-sm">Iran Tehran</span>
                    </div>
                </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <FooterCs />
    </>
  );
}

export default Contact;
