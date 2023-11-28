import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import { Typography } from '@mui/material';
import Link from 'next/link';
function Sidebar() {
    const sidebar=[{id:'side-77' ,name:'WebSite' ,icon:<LanguageIcon />,url:'/'},{id:'side-5', name:'panel',icon:<GridViewOutlinedIcon/>,url:'panel'},{id:'side-1', url:'users',name:'users',icon:<PersonOutlineOutlinedIcon/>},{id:'side-2',url:'settings', name:'settings',icon:<SettingsOutlinedIcon/>},{id:'side-3',url:'products', name:'products',icon:<ProductionQuantityLimitsOutlinedIcon/>}]
  return (
    <div className='min-h-full'>
        <ul className='list-none p-0'>
            {sidebar.map((side)=>{
               return  <li key={side.id} className='py-3 lg:py-5 px-3 text-white flex items-center hover:bg-orange-500'> 
               {side.icon}
               <Typography paddingLeft={2} >
                   <Link href={`/dashboard/${side.url}`} className='text-sm lg:text-lg'> {side.name}</Link>
               </Typography>
               </li>
            })
            }
           
        </ul>
    </div>
  )
}

export default Sidebar