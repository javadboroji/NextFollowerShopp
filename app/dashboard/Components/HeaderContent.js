import { Box } from '@mui/material'
import React from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
function HeaderContent() {
  return (
    <div className='bg-slate-950 p-5 flex justify-between' >
        <span className='text-white'> HeaderContent</span>
        <NotificationsOutlinedIcon  sx={{color:'#fff'}}/>
    </div>
  )
}

export default HeaderContent