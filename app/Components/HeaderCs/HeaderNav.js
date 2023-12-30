import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function HeaderNav({handleCloseNavMenu,pages}) {
  return (
    <>
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          
        {pages.map((page,i) => (
        
             <Link key={i} className='px-6' href={`/${page !='Register/Login' ?page :'Register'}`} style={{color:'#fff' ,textDecoration:'none' ,fontSize:'0.9rem' ,fontWeight:'600'}}> {page} </Link>
         
          ))}
          </Box>
    </>
  )
}

export default HeaderNav