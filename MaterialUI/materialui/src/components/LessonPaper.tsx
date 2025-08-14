import { Paper,Box } from '@mui/material'
import React from 'react'

const LessonPaper = () => {
  return (
    // elevation: gölge değeri, gap: aralarında boşluk için, square : border radius'u sıfırlıyor
    <Box sx={{display:"flex" , gap:'20px'}}>
        <Paper sx={{width:100, height:100}}/>
        <Paper sx={{width:100, height:100}} elevation={1} />
        <Paper sx={{width:100, height:100}} elevation={2} />
        <Paper sx={{width:100, height:100}} elevation={3} />
        <Paper sx={{width:100, height:100}} elevation={3} variant='outlined' square />
            
       
    </Box>
  )
}

export default LessonPaper