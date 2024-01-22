'use client'
import React, { useEffect, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";
function UploadImage() {
    const [imageFile, setImageFile] = useState('')
    const inpHandler=(e)=>{
        setImageFile(e.target.files[0]);
    }
    useEffect(() => {
        console.log("renderUpload",imageFile);
    }, [])
    
  return (
    <Box maxWidth="md" sx={{ mt: 8 }}>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <input hidden accept="image/*" type="file"  onChange={inpHandler}/>
        <PhotoCamera />
      </IconButton>
  </Box>
  )
}

export default UploadImage