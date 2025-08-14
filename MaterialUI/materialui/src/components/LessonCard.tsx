import { Card, CardActions, CardContent, CardMedia,Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const LessonCard = () => {
  return (
   <Card sx={{
    width:350,
   }}>
    <CardMedia height="150" component="img" image='https://picsum.photos/seed/picsum/200/300'/>
    <CardContent>
      <Typography variant='h5' component="div">
        Başlığım
      </Typography>
       <Typography variant='body2' component="p">
        Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
        taklit yazı bloku olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
        içerik yerine geçerek yazı blokunu doldurmak için kullanılır.
      </Typography>
    </CardContent>
    <CardActions>
      <Button color='error'>Temizle</Button>
      <Button>Kaydet</Button>
    </CardActions>
   </Card>
  )
}

export default LessonCard
