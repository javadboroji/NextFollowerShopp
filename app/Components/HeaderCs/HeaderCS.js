"use client"
import React,{useState,useEffect} from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import HeaderSettings from './HeaderSettings';
import HeaderNav from './HeaderNav';

const pages = [{description:'/about',name:'درباره ما'}, {description:'/contact',name:'تماس با ما'}, {description:"blog",name:'وبلاگ'},{description:'/register',name:'ورود/ثبت نام '}];



function HeaderCS() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollPosition]);

    const navStyle = {
      transition:' .3s ',
      opacity: scrollPosition > 80 && scrollPosition < 400 ? 0 :1 ,
      transform:scrollPosition > 80 && scrollPosition < 400 ? 'translateY(-5rem)' :'translateY(0)' ,
      background:'#001d3d',
      boxShadow:scrollPosition > 390? 'rgba(0, 0, 0, 0.1) 0px 0px 20px':'none',
    };

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
   
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   
  return (
    <AppBar position="fixed"  sx={navStyle}>
    <Container maxWidth="xl">
    
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Link href="/"> LOGO</Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Link href="/about">about</Link>
            {pages.map((page,i) => (
              <MenuItem key={i} onClick={handleCloseNavMenu}>
               <Link  href={page.description}>{page.name}</Link>

              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <HeaderNav handleCloseNavMenu={handleCloseNavMenu} pages={pages}/>
        <Box sx={{ flexGrow: 0 }}>
            <HeaderSettings />
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default HeaderCS