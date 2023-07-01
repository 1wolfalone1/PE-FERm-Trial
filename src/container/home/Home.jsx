import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import Card from "../../component/card/Card";

export default function Home() {
   const [datas, setDatas] = useState();

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
   return (
      <Box padding='1rem 2rem'>
         <Grid2 container spacing={2} >
            {datas
               ? datas.map((data) => (
                    <Grid2  xs={2} key={data.id}>
                       <Card data={data} />
                    </Grid2>
                 ))
               : ""}
         </Grid2>
      </Box>
   );
}
