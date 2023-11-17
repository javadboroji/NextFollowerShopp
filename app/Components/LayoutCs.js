import React from 'react'
import HeaderCS from './HeaderCS'
import { Box } from '@mui/material'

function LayoutCs({children}) {
  return (
   <Box>
    <HeaderCS/>
    {children}
    <h1> Footer</h1>
   </Box>
  )
}

export default LayoutCs 