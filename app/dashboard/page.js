
import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import  Content from './Content/Content'
import { Grid } from '@mui/material'

function page() {
  return (
      <>
      <Grid container spacing={2}>
        <Grid item xs={4}> <Sidebar/> </Grid>
        <Grid item xs={8}> <Content /></Grid>

      </Grid>
        
        
      </>
    )
}

export default page