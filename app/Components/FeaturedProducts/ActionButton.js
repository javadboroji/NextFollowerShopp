"use client"
import { Box } from '@mui/material'
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CachedIcon from '@mui/icons-material/Cached';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ActionButton() {
  return (
   <>
    <div className='absolute flex flex-col top-5 right-2 action-box '>
    <div className='bg-b2-500 p-2 flex justify-center mb-2  rounded-full'> <RemoveRedEyeIcon sx={{color:'#fff'}} fontSize='1rem'/> </div>
    <div className='bg-b2-500  p-2 flex justify-center mb-2  rounded-full'> <CachedIcon sx={{color:'#fff'}} fontSize='1rem'/> </div>
    <div className='bg-b2-500  p-2 flex justify-center mb-2  rounded-full'> <FavoriteIcon sx={{color:'#fff'}} fontSize='1rem'/> </div>
   </div>
   </>
  )
}

export default ActionButton