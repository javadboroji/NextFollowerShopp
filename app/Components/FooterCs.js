import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
function FooterCs() {
  const quickLink = [
    {
      id: "f-1",
      title: "about",
      url: "/about",
    },
    {
      id: "f-2",
      title: "contact",
      url: "/contact",
    },
    {
      id: "f-3",
      title: "register",
      url: "/register",
    },
    {
      id: "f-4",
      title: "blog",
      url: "/blog",
    },
  ];
  return (
    <div className="bg-slate-900">
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid item xs={12} lg={5}>
              <div className="flex flex-col p-5">
                <h2 className="text-white font-semibold text-sm lg:text-2xl">
                  {" "}
                  MyWeb
                </h2>
                <span className="text-white mt-5">
                  Lorem Khaled Ipsum is a major key to success. To be successful
                  you’ve got to work hard you’ve got to make it.
                </span>
                <div className="flex my-5">
                  {" "}
                 <Link href={'/'}> <InstagramIcon sx={{color:'#fff' ,margin:'0 0.5rem'}}/> </Link> 
                 <Link href={'/'}>  <WhatsAppIcon sx={{color:'#fff',margin:'0 0.5rem'}}/></Link>
                 <Link href={'/'}><LinkedInIcon sx={{color:'#fff',margin:'0 0.5rem'}}/></Link>
                 <Link href={'/'}> <YouTubeIcon sx={{color:'#fff',margin:'0 0.5rem'}}/></Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={3}>
              <ul className="flex flex-col   justify-start lg:justify-center items-baseline lg:items-center p-5">
                <span className="text-white font-semibold text-sm lg:text-2xl">
                  {" "}
                  QuickLink
                </span>
                {quickLink.map((link) => {
                  return (
                    <li key={link.id} className="py-1 lg:py-3">
                      {" "}
                      <Link
                        href={`${link.url}`}
                        className="text-white hover:text-yellow-400"
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="p-5">
                <span className="text-white font-semibold text-sm lg:text-2xl">
                  See Information
                </span>
                <div className="flex flex-col">
                  <div className="flex py-3">
                    <span className="text-white text-lg font-bold">
                      {" "}
                      Phone:
                    </span>
                    <span className="text-white px-2">09392409359</span>
                  </div>
                  <div className="flex py-3">
                    <span className="text-white text-lg font-bold">
                      {" "}
                      Email:
                    </span>
                    <span className="text-white px-2">
                      javadboroji2222@gmail.com
                    </span>
                  </div>
                  <div className="flex py-3">
                    <span className="text-white text-lg font-bold">
                      {" "}
                      Address:
                    </span>
                    <span className="text-white px-2">Theran</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterCs;
