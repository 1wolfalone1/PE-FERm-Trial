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
            '&:hover': {
               cursor: "pointer"
            }
         }}
         onClick={handleClick}
      >
         <Box width={"100%"}>
            <img src={data.avatar} style={{ width: "100%" }} alt="" />
         </Box>
         <Box padding={"1rem"}>
            <Typography><strong>Name:</strong> {data.name}</Typography>
            <Typography><strong>Age:</strong> {data.age}</Typography>
            <Tooltip title={data.address}>
               <Typography noWrap><strong>Address:</strong> {data.address}</Typography>
            </Tooltip>
         </Box>
      </Box>
   );
}
