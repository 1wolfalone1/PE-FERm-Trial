import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card({ data }) {
   const nav = useNavigate();
   const handleClick = () => {
		nav('/details-staff/' + data.id);
	};
   return (
      <Box
         sx={{
            backgroundColor: "#dde7e4",
            boxShadow: "5px 5px 10px #4d4d4d26",
         }}
         onClick={handleClick}
      >
         <Box width={"100%"}>
            <img src={data.avatar} style={{ width: "100%" }} alt="" />
         </Box>
         <Box padding={"1rem"}>
            <Typography>Name: {data.name}</Typography>
            <Typography>Age: {data.age}</Typography>
            <Tooltip title={data.address}>
               <Typography noWrap>Address: {data.address}</Typography>
            </Tooltip>
         </Box>
      </Box>
   );
}
