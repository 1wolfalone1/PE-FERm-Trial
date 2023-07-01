import {
   Alert,
   AlertTitle,
   Box,
   Button,
   Collapse,
   Divider,
   IconButton,
   Modal,
   Snackbar,
   Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormUpdate from "../../component/form-update/FormUpdate";
import axios from "axios";
import FormAddStaff from "../../component/form-add-staff/FormAddStaff";
export default function DashBoard() {
   const [datas, setDatas] = useState();
   const [currentEdit, setCurrentEdit] = useState();
   const [open, setOpen] = useState(false);
   const [typeModal, setTypeModal] = useState("update");
   const [currentDelete, setCurrentDelete] = useState();
   const [snackBar, setSnackBar] = useState({
      open: false,
      title: "success",
      message: "",
      type: "success",
   });
   useEffect(() => {
      getData();
   }, []);
   const getData = async () => {
      try {
         const res = await fetch(
            "https://649f9a4ced3c41bdd7a688f7.mockapi.io/staffManagement"
         );
         const data = await res.json();
         setDatas(data);
      } catch (e) {
         console.log(e);
      }
   };
   console.log(datas);
   const handleUpdate = (data) => {
      return () => {
         setTypeModal("update");
         setCurrentEdit(data);
         setOpen(true);
      };
   };
   const handleClose = () => {
      console.log(open);
      setOpen(false);
   };
   const handleDelete = (id) => {
      return () => {
         setTypeModal("delete");
         setCurrentDelete(id);
         setOpen(true);
      };
   };
   const deleteStaff = async () => {
      try {
         const res = await axios.delete(
            "https://649f9a4ced3c41bdd7a688f7.mockapi.io/staffManagement/" +
               currentDelete
         );
         const data = await res.data;
         console.log(data);
         setOpen(false);
         getData();
         setSnackBar({
            open: true,
            type: "success",
            title: "Success",
            message: "Deleted successfully!",
         });
      } catch (e) {
         setSnackBar({
            open: true,
            type: "error",
            title: "Error",
            message: "Deleted failure! try again",
         });
         console.log(e);
      }
   };
   const handleAddNewStaff = () => {
      setTypeModal('add');
      setOpen(true);
   }
   return (
      <Box p={3} display={"flex"} flexDirection={"column"} gap={2}>
         <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={"1rem 2rem"}
            backgroundColor={"#d7f5ce"}
            boxShadow={"5px 5px 10px rgba(126, 124, 124, 0.5)"}
         >
            <Typography variant="h3">Staff management</Typography>
            <Button variant="outlined" sx={{ fontSize: "1.5rem" }} onClick={handleAddNewStaff}>
               Add new staff +
            </Button>
         </Box>
         <Grid2 container sx={{ backgroundColor: "#5d5d5d" }}>
            <Grid2 xs={1} sx={{ display: "flex", justifyContent: "center" }}>
               <Typography sx={{ color: "white" }} variant="h5">
                  ID
               </Typography>
            </Grid2>
            <Grid2 xs={2} sx={{ display: "flex", justifyContent: "center" }}>
               <Typography sx={{ color: "white" }} variant="h5">
                  NAME
               </Typography>
            </Grid2>
            <Grid2 xs={2} sx={{ display: "flex", justifyContent: "center" }}>
               <Typography sx={{ color: "white" }} variant="h5">
                  AGE
               </Typography>
            </Grid2>
            <Grid2 xs={3} sx={{ display: "flex", justifyContent: "center" }}>
               <Typography sx={{ color: "white" }} variant="h5">
                  ADDRESS
               </Typography>
            </Grid2>
            <Grid2 xs={3} sx={{ display: "flex", justifyContent: "center" }}>
               <Typography sx={{ color: "white" }} variant="h5">
                  {" "}
                  CREATE DATE
               </Typography>
            </Grid2>
            <Grid2 xs={1} sx={{ display: "flex", justifyContent: "center" }}>
               <Typography sx={{ color: "white" }} variant="h5">
                  ACTION
               </Typography>
            </Grid2>
         </Grid2>
         <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            backgroundColor={"#e8e8e8"}
         >
            {datas
               ? datas?.map((data) => (
                    <>
                       <Grid2 container>
                          <Grid2
                             xs={1}
                             sx={{ display: "flex", justifyContent: "center" }}
                          >
                             <Typography sx={{}} variant="h5">
                                {data.id}
                             </Typography>
                          </Grid2>
                          <Divider
                             orientation="vertical"
                             flexItem
                             sx={{ mr: "-1px" }}
                          />
                          <Grid2
                             xs={2}
                             sx={{ display: "flex", justifyContent: "center" }}
                          >
                             <Typography sx={{}} variant="h5">
                                {data.name}
                             </Typography>
                          </Grid2>
                          <Divider
                             orientation="vertical"
                             flexItem
                             sx={{ mr: "-1px" }}
                          />
                          <Grid2
                             xs={2}
                             sx={{ display: "flex", justifyContent: "center" }}
                          >
                             <Typography sx={{}} variant="h5">
                                {data.age}
                             </Typography>
                          </Grid2>
                          <Divider
                             orientation="vertical"
                             flexItem
                             sx={{ mr: "-1px" }}
                          />
                          <Grid2
                             xs={3}
                             sx={{ display: "flex", justifyContent: "center" }}
                          >
                             <Typography sx={{}} variant="h5">
                                {data.address}
                             </Typography>
                          </Grid2>
                          <Divider
                             orientation="vertical"
                             flexItem
                             sx={{ mr: "-1px" }}
                          />
                          <Grid2
                             xs={3}
                             sx={{ display: "flex", justifyContent: "center" }}
                          >
                             <Typography sx={{}} variant="h6">
                                {" "}
                                {new Date(data.createdAt).toString()}
                             </Typography>
                          </Grid2>
                          <Divider
                             orientation="vertical"
                             flexItem
                             sx={{ mr: "-1px" }}
                          />
                          <Grid2
                             xs={1}
                             sx={{ display: "flex", justifyContent: "center" }}
                          >
                             <IconButton onClick={handleUpdate(data)}>
                                <BorderColorIcon sx={{ fontSize: "2rem" }} />
                             </IconButton>
                             <IconButton onClick={handleDelete(data.id)}>
                                <DeleteForeverIcon sx={{ fontSize: "2rem" }} />
                             </IconButton>
                          </Grid2>
                       </Grid2>
                    </>
                 ))
               : ""}
         </Box>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
         >
            {typeModal === "update" ? (
               <Box
                  sx={{
                     position: "absolute",
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, -50%)",
                     backgroundColor: "white",
                     width: "500px",
                     padding: "1rem",
                  }}
               >
                  <Typography
                     variant="h4"
                     sx={{ textAlign: "center", marginBottom: 3 }}
                  >
                     Update form
                  </Typography>
                  <FormUpdate
                     data={currentEdit}
                     handleClose={handleClose}
                     getData={getData}
                     setCurrentEdit={setCurrentEdit}
                     setSnackBar={setSnackBar}
                  />
               </Box>
            ) : (
               <>
                  {typeModal === "delete" ? (
                     <Box
                        sx={{
                           position: "absolute",
                           top: "50%",
                           left: "50%",
                           transform: "translate(-50%, -50%)",
                           backgroundColor: "white",
                           width: "500px",
                           padding: "1rem",
                        }}
                     >
                        <Typography variant="h6">
                           <strong>Are you sure to delete staff with id {currentDelete}?</strong>
                        </Typography>
                        <Box display={"flex"} justifyContent={"end"}>
                           <Button onClick={() => setOpen(false)}>
                              Cancel
                           </Button>
                           <Button onClick={() => deleteStaff()}>Delete</Button>
                        </Box>
                     </Box>
                  ) : (
                     <Box
                        sx={{
                           position: "absolute",
                           top: "50%",
                           left: "50%",
                           transform: "translate(-50%, -50%)",
                           backgroundColor: "white",
                           width: "500px",
                           padding: "1rem",
                        }}
                     >
                        <Typography
                           variant="h4"
                           sx={{ textAlign: "center", marginBottom: 3 }}
                        >
                           Add new staff
                        </Typography>
                        <FormAddStaff
                           close={handleClose}
                           getData={getData}
                           setSnackbar={setSnackBar}
                        />
                     </Box>
                  )}
               </>
            )}
         </Modal>
         <Snackbar
            open={snackBar?.open}
            autoHideDuration={3000}
            onClose={() =>
               setSnackBar((state) => {
                  return { ...state, open: false };
               })
            }
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
         >
            <Collapse in={snackBar?.open}>
               <Alert
                  onClose={() =>
                     setSnackBar((state) => {
                        return { ...state, open: false };
                     })
                  }
                  severity={snackBar.type}
                  variant="filled"
               >
                  <AlertTitle>{snackBar.title}</AlertTitle>
                  {snackBar.message}
               </Alert>
            </Collapse>
         </Snackbar>
      </Box>
   );
}
