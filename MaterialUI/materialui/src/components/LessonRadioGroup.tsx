import React, { useState } from 'react'
import {FormControl,RadioGroup, FormLabel,FormControlLabel ,Radio,FormHelperText} from '@mui/material';

const LessonRadioGroup = () => {
    const[value, setValue]= useState('');

   const  handleChange =(event : React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
  return (
    <FormControl>
        <FormLabel>Maaş Beklentisi</FormLabel>
        <RadioGroup row name='expected-salary' value={value} onChange={handleChange}>
            <FormControlLabel label="2000$" value="2000" color='secondary' control={<Radio/>}/>
            <FormControlLabel label="3000$" value="3000" color='secondary' control={<Radio/>}/>
            <FormControlLabel label="4000$" value="4000" color='secondary' control={<Radio/>}/>
        </RadioGroup>
        <FormHelperText>Uygun Maaşı seçiniz</FormHelperText>
    </FormControl>
  )
}

export default LessonRadioGroup
