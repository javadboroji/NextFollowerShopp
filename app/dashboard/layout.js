import { Grid } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import '@/app/dashboard/style.css'
import HeaderContent from "./Components/HeaderContent";
export default function DashboardLayout({ children }) {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={2} className="sidebar-bg">
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
        <HeaderContent />
          {children}
        </Grid>
      </Grid>
    </>
  );
}
