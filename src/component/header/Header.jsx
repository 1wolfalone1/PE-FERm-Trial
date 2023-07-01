import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Header() {
   const [value, setValue] = useState();
   const navigate = useNavigate();
   const handleHeaderChange = (e, value) => {
      console.log(value);
      setValue(value);
   };
   return (
      <>
         <Box
            alignItems={"center"}
            display={"flex"}
            sx={{
               width: "100%",
               position: "fixed",
               backgroundColor: "#aeaeae",
            }}
            height={"70px"}
         >
            <Tabs value={value} onChange={handleHeaderChange}>
               <Tab value={1} label={"Home"} onClick={() => navigate('/')}/>
               <Tab value={2} label={"Dashboard"} onClick={() => navigate('/dashboard')}/>
               <Tab value={3} label={"Contact"} onClick={() => navigate('/contact')}/>
            </Tabs>
         </Box>
         <Box width="100%" height={"70px"}></Box>
      </>
   );
}
