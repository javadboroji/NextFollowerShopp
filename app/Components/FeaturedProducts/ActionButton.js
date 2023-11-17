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
    <div className='bg-black p-2 flex justify-center mb-2  rounded-full'> <RemoveRedEyeIcon color='primary' fontSize='1rem'/> </div>
    <div className='bg-black p-2 flex justify-center mb-2  rounded-full'> <CachedIcon color='primary' fontSize='1rem'/> </div>
    <div className='bg-black p-2 flex justify-center mb-2  rounded-full'> <FavoriteIcon color='primary' fontSize='1rem'/> </div>
   </div>
   </>
  )
}

export default ActionButton