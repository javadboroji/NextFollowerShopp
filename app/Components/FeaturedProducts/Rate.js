"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
function Rate({value}) {
  return (
    <Box
    sx={{
      '& > legend': { mt: 2 },
    }}
  >

    <Rating
      name="simple-controlled"
      value={value}
      readOnly
    
    />
  </Box>
  )
}

export default Rate