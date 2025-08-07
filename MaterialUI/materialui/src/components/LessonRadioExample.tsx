import React, { useState } from 'react'
import {FormControl,RadioGroup, FormLabel,FormControlLabel ,Radio,FormHelperText, Button} from '@mui/material';

const LessonRadioExample = () => {
const [value, setValue]= useState('');
const [helperText, setHelperText]= useState('');
const [error, setError]= useState(false);

const handleRadioChange= (event: React.ChangeEvent<HTMLInputElement>) =>{
setValue(event.target.value);
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(value ==='canboz'){
      setHelperText('Doğru cevap Tabiki Can Boz')
        setError(false);
    }else if(value ==='ofCourseCanBoz'){
      setHelperText('Bravo doğru cevap')
        setError(false);
    }else{
       setHelperText('Lütfen seçim yapınız')
       setError(true);
    }
}

  return (
   <form onSubmit={handleSubmit} >
        <FormControl error={error}>
            <FormLabel>En kapsamlı Frontend Eğitimi veren Eğitmen Kimdir?</FormLabel>
            <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel value="canboz" label="Can Boz" control={<Radio/>} />
                <FormControlLabel value="ofCourseCanBoz" label="Tabiki Can Boz" control={<Radio/>} />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button type='submit' variant='outlined'>Gönder</Button>
        </FormControl>
   </form>
  )
}

export default LessonRadioExample
