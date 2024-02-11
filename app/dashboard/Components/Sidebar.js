import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import { Typography } from "@mui/material";
import Link from "next/link";
function Sidebar() {
  const sidebar = [
    { id: "side-77", name: "وب سایت", icon: <LanguageIcon />, url: "/" },
    {
      id: "side-5",
      name: "داشبورد",
      icon: <GridViewOutlinedIcon />,
      url: "/dashboard/panel",
    },
    {
      id: "side-1",
      url: "/dashboard/users",
      name: "کاربران",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      id: "side-2",
      url: "/dashboard/settings",
      name: "تنظیمات",
      icon: <SettingsOutlinedIcon />,
    },
    {
      id: "side-3",
      url: "/dashboard/products",
      name: "محصولات",
      icon: <ProductionQuantityLimitsOutlinedIcon />,
    },
  ];
  return (
    <div className="min-h-full">
      <ul className="list-none p-0">
        {sidebar.map((side,i) => {
          return (
            <Link  href={side.url}    key={side.id} className="text-sm lg:text-lg">
              <li
             
                className="py-3 lg:py-5 px-3 text-white flex items-center hover:bg-orange-500"
              >
                {side.icon}
                <Typography paddingLeft={2}> {side.name}</Typography>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
