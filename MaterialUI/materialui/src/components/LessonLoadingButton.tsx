import React,{useState} from 'react'
import {Stack} from '@mui/material';
import {LoadingButton} from '@mui/lab';

export const LessonLoadingButton = () => {
    const [value, setValue] = useState(false)
  return (
    <Stack direction="row">
        <LoadingButton loading>Kaydet</LoadingButton>
        <LoadingButton loading={true} variant="outlined">Kaydet</LoadingButton>
        <LoadingButton loading={value} variant="outlined" onClick={()=>{setValue(true)}}>Kaydet</LoadingButton>

    </Stack>
  )
}
