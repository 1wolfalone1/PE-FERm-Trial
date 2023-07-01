import { Box } from "@mui/material";
import React from "react";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer/Footer";

export default function Layout() {
   return (
      <>
         <Box sx={{ minHeight: "100vh", width: '100%' }}>
            <Header />
            <Outlet />
         </Box>
         <Footer />
      </>
   );
}
