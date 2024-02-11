import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {log} from "next/dist/server/typescript/utils";

function HeaderNav({handleCloseNavMenu,pages}) {
  return (
    <>
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          
        {pages.map((page,i) => (
             <Link key={i} className='px-6' href={page.description} replace prefetch={false} style={{color:'#fff' ,textDecoration:'none' ,fontSize:'0.9rem' ,fontWeight:'600'}}> {page.name} </Link>

          ))}
          </Box>
    </>
  )
}

export default HeaderNav