import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const LessonSelect = () => {

    // const [country,setCountry]= useState('');

    // multi select için array
    const [country,setCountry]= useState<string[]>([]);
    console.log(country)
  return (
    <Box width="250px">
      {/* <TextField select label="Ülke seçiniz" fullWidth
      value={country}
      onChange={(e)=>setCountry(e.target.value)}>
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">Fransa</MenuItem>
      </TextField> */}

        {/* multi select */}
    <TextField 
    SelectProps={{
      multiple: true
    }}
    select label="Ülke seçiniz" fullWidth
      value={country}
      onChange={(e)=>setCountry(typeof e.target.value === 'string' ? e.target.value.split(','): e.target.value)}>
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">Fransa</MenuItem>
      </TextField>
    </Box>
  )
}

export default LessonSelect
