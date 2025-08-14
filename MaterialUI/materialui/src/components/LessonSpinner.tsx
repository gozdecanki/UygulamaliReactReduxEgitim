import React from 'react';
import {CircularProgress,Stack, LinearProgress} from '@mui/material';

const LessonSpinner = () => {
  return (
    <Stack spacing={4}>
        <CircularProgress color="secondary" />
        <CircularProgress color="error" />
        <CircularProgress color="success" />
       
        <CircularProgress variant='determinate' value={25} color="success" />

        <LinearProgress/>
        <LinearProgress color='secondary'/>
        <LinearProgress color='success'/>
        <LinearProgress variant='determinate' value={25} color='success'/>
    </Stack>
  )
}

export default LessonSpinner
