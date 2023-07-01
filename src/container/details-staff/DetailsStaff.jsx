import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function DetailsStaff() {
   const [staff, setStaff] = useState();
   const navigate = useNavigate();
   const params = useParams();
   useEffect(() => {
      getStaff();
   }, []);
   const getStaff = async () => {
      try {
         console.log(params.id);
         const res = await fetch(
            "https://649f9a4ced3c41bdd7a688f7.mockapi.io/staffManagement/" +
               params.id
         );
         const data = await res.json();
         console.log(data);
         setStaff(data);
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <>
         {staff ? (
            <>
               <Box
                  padding="5rem 10rem"
                  display={"flex"}
                  flexDirection={"column"}
                  gap={3}
               >
                  <Box>
                     <Button
                        variant="outlined"
                        color="success"
                        onClick={() => navigate("/")}
                     >
                        Back to home
                     </Button>
                  </Box>
                  <Grid2
                     container
                     spacing={4}
                     sx={{
                        backgroundColor: "#e9ffe7",
                        boxShadow: "7px 7px 20px #38383840",
                     }}
                  >
                     <Grid2 xs={5}>
                        <Box>
                           <img
                              src={staff.avatar}
                              style={{ width: "100%" }}
                              alt=""
                           />
                        </Box>
                     </Grid2>
                     <Grid2 xs={7}>
                        <Box display={"flex"} flexDirection={"column"}>
                           <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap="1rem"
                           >
                              <Typography variant="h3">Name: </Typography>
                              <Typography variant="h4">
                                 {staff.name}{" "}
                              </Typography>
                           </Box>
                           <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap="1rem"
                           >
                              <Typography variant="h3">Age: </Typography>
                              <Typography variant="h4">
                                 {staff.age} year old
                              </Typography>
                           </Box>
                           <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap="1rem"
                           >
                              <Typography variant="h3">Address: </Typography>
                              <Typography variant="h4">
                                 {staff.address}{" "}
                              </Typography>
                           </Box>
                           <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap="1rem"
                           >
                              <Typography variant="h3">Create at: </Typography>
                              <Typography variant="h4">
                                 {staff.createdAt}{" "}
                              </Typography>
                           </Box>
                        </Box>
                     </Grid2>
                  </Grid2>
               </Box>
            </>
         ) : (
            ""
         )}
      </>
   );
}
