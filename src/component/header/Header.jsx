import React, { useState } from "react";
import { Box, Tabs, Tab, AppBar } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Header() {
   const [value, setValue] = useState(1);
   const navigate = useNavigate();
   const handleHeaderChange = (e, value) => {
      console.log(value);
      setValue(value);
   };
   return (
      <>
         <AppBar
            display={"flex"}
            position="static"
            sx={{
               width: "100%",
               backgroundColor: "#fcffdd",
            }}
            height={"70px"}
         >
            <Tabs value={value} onChange={handleHeaderChange} >
               <Tab value={1} label={"Home"}  onClick={() => navigate('/')}/>
               <Tab value={2} label={"Dashboard"} onClick={() => navigate('/dashboard')}/>
               <Tab value={3} label={"Contact"} onClick={() => navigate('/contact')}/>
            </Tabs>
         </AppBar>

      </>
   );
}
