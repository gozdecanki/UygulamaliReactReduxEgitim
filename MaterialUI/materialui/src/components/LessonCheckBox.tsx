
import { Box,FormControlLabel,Checkbox,FormControl,
    FormLabel,FormGroup,
    FormHelperText } from '@mui/material'
import React, { useState } from 'react'

const LessonCheckBox = () => {
    const [isAccept, setIsAccept] = useState(false);
    const [knowledge, setKnowledge] = useState<string[]>([]);
    console.log(isAccept);
     console.log(knowledge);
    const handleKnowledgeChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const index = knowledge.indexOf(event.target.value);
        //    yoksa ekliyoruz
        if(index === -1){ 
            setKnowledge([...knowledge, event.target.value])
        }
            // varsa siliyoruz
        else{
            setKnowledge(knowledge.filter((item)=>item !== event.target.value))
        }
    }
  return (
    <Box>
         <Box>
        <FormControl>
            <FormLabel>Eğitim Durumu</FormLabel>
            <FormGroup row>
                <FormControlLabel disabled control={<Checkbox/>} label="İlkokul" />
                <FormControlLabel control={<Checkbox/>} label="Lise" />
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Üniversite" />
            </FormGroup>
        </FormControl>

        </Box>

        <Box>
        <FormControl>
            <FormLabel>Kullanım Koşulu Durumu</FormLabel>
            <FormGroup row>
                <FormControlLabel 
                 control={<Checkbox checked={isAccept} 
                 onChange={(e)=> setIsAccept(e.target.checked)}/>} 
                label="Kullanım koşullarını kabul ediyorum" />
             
            </FormGroup>
        </FormControl>

   </Box>
    <Box>
        <FormControl>
            <FormLabel>Frontend de Neleri Biliyorsunuz?</FormLabel>
            <FormGroup row>
                <FormControlLabel 
                 control={<Checkbox checked={knowledge.includes('react')} 
                 onChange={handleKnowledgeChange}/>} 
                label="React Js" value='react'/>
                <FormControlLabel 
                 control={<Checkbox checked={knowledge.includes('angular')} 
                 onChange={handleKnowledgeChange}/>} 
                label="Angular" value='angular'/>
                <FormControlLabel 
                 control={<Checkbox checked={knowledge.includes('vue')} 
                 onChange={handleKnowledgeChange}/>} 
                label="Vue Js" value='vue'/>
            </FormGroup>
        </FormControl>

   </Box>
    </Box>
  
  )
}

export default LessonCheckBox
