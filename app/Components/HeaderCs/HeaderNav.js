import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function HeaderNav({handleCloseNavMenu,pages}) {
  return (
    <>
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          
        {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
             <Link href={`/${page !='Register/Login' ?page :'Register'}`} style={{color:'#fff' ,textDecoration:'none' ,fontSize:'0.9rem' ,fontWeight:'600'}}> {page} </Link>
            </Button>
          ))}
          </Box>
    </>
  )
}

export default HeaderNav