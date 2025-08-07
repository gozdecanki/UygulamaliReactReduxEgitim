import React from 'react'
import {Button, Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// stack kapsayıcı div mantığındadır
export const LessonButton = () => {
  return (
    // default olarak column olduğu için aralık vermek için yine spacing kullandık
    <Stack spacing={4}> 
      <Stack direction="row" spacing={2}>
       <Button variant="text">Text</Button>
       <Button variant="outlined">Outlined</Button>
       <Button variant="contained">Contained</Button>
     </Stack>

     <Stack direction="row" spacing={2}>
      <Button variant="text" color='primary'>Mavi</Button>
      <Button variant="text" color='secondary'>Mor</Button>
      <Button variant="text" color='success'>Yeşil</Button>
      <Button variant="text" color='error'>Kırmızı</Button>
      <Button variant="text" color='warning'>Sarı</Button>
      <Button variant="text" color='info'>Açık Mavi</Button>
     
    </Stack>

       <Stack direction="row" spacing={2}>
      <Button variant="outlined" color='primary'>Mavi</Button>
      <Button variant="outlined" color='secondary'>Mor</Button>
      <Button variant="outlined" color='success'>Yeşil</Button>
      <Button variant="outlined" color='error'>Kırmızı</Button>
      <Button variant="outlined" color='warning'>Sarı</Button>
      <Button variant="outlined" color='info'>Açık Mavi</Button>
     
    </Stack>

          <Stack direction="row" spacing={2}>
      <Button variant="contained" color='primary'>Mavi</Button>
      <Button variant="contained" color='secondary'>Mor</Button>
      <Button variant="contained" color='success'>Yeşil</Button>
      <Button variant="contained" color='error'>Kırmızı</Button>
      <Button variant="contained" color='warning'>Sarı</Button>
      <Button variant="contained" color='info'>Açık Mavi</Button>
     
    </Stack>
         {/* buton boyutları */}
     <Stack direction="row" display="block" spacing={2}>
      <Button variant="outlined" size='small'>Buton</Button>
      <Button variant="outlined" size='medium'>Buton</Button>
      <Button variant="outlined" size='large'>Buton</Button>
    </Stack>
    <Stack direction="row"  spacing={2}>
      <AddIcon color='error'/>
      <Button variant='contained' startIcon={<AddIcon/>}>Ekle</Button>
      <Button variant='contained' endIcon={<AddIcon/>} onClick={()=> alert("tıklandı")}>Ekle</Button>
    </Stack>



    

    </Stack>
  

  )
}

