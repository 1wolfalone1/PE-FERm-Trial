import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
   name: yup
      .string("")
      .min(2, "name must be at least 2 words")
      .required("Email is required!"),
   age: yup.number("").typeError("Not valid age").required("Age is required!"),
   address: yup.string("").required("Address is required!"),
   avatar: yup.string("").required("Avatar is required!"),
});
export default function FormAddStaff({getData, close, setSnackbar}) {
   const form = useFormik({
      initialValues: {
         name: "",
         age: "",
         address: "",
         avatar: '',
      },
      validationSchema: validationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async () => {
         try {
            const res = await axios.post(
               "https://649f9a4ced3c41bdd7a688f7.mockapi.io/staffManagement/",
               {
                  ...form.values, createdAt: (new Date()).toISOString()
               }
            );
            const data = await res.data;
            getData();
            close();
            setSnackbar({
               open: true,
               type: "success",
               title: "Success",
               message: "Add new staff successfully!",
            });
            
         } catch (e) {
            setSnackbar({
               open: true,
               type: "error",
               title: "Error",
               message: "Add new staff failure! try again",
            });
            console.error(e);
         }
      },
   });
   return (
      <form onSubmit={form.handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <TextField
            fullWidth
            id="name"
            label="name"
            variant="outlined"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.name && Boolean(form.errors.name)}
            helperText={form.touched.name && form.errors.name}
            FormHelperTextProps={{}}
         />
         <TextField
            fullWidth
            id="age"
            label="age"
            variant="outlined"
            value={form.values.age}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.age && Boolean(form.errors.age)}
            helperText={form.touched.age && form.errors.age}
            FormHelperTextProps={{}}
         />
         <TextField
            fullWidth
            id="address"
            label="address"
            variant="outlined"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.address && Boolean(form.errors.address)}
            helperText={form.touched.address && form.errors.address}
            FormHelperTextProps={{}}
         />
         <TextField
            fullWidth
            id="avatar"
            label="avatar"
            variant="outlined"
            value={form.values.avatar}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.avatar && Boolean(form.errors.avatar)}
            helperText={form.touched.avatar && form.errors.avatar}
            FormHelperTextProps={{}}
         />
         <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => close()}>Cancel</Button>
            <Button type={"submit"}>Create</Button>
         </Box>
      </form>
   );
}
