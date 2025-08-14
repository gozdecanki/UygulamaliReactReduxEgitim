import React from 'react'
import { Grid, Box } from '@mui/material'
export const LessonGrid = () => {
  return (
<Box>

    <Grid container>
         <Grid size={{ xs: 12, md: 8 }}> 8 birim</Grid>
         <Grid size={{ xs: 12, md: 4 }}> 4 birim</Grid>
         <Grid size={{ xs: 12, md: 8 }}> 8 birim</Grid>
         <Grid size={{ xs: 12, md: 4}}> 4 birim</Grid>
    </Grid>

     {/* <Grid container>
         <Grid size={8}> 8 birim</Grid>
         <Grid size={4}> 4 birim</Grid>
         <Grid size={8}> 8 birim</Grid>
         <Grid size={4}> 4 birim</Grid>
    </Grid> */}
</Box>
  );
};


