import React,{useState} from 'react'
import {Stack,Snackbar,Button,IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LessonSnackbar = () => {
const [openSnackbar, setOpenSnackbar] = useState(false);

const handleClick=()=>{
    setOpenSnackbar(true);
}
const handleClose=()=>{
    setOpenSnackbar(false);
}

const action=(
    <React.Fragment>
           <Button color="secondary" size="small" onClick={handleClose}>Geri al</Button>
           <IconButton>
              <CloseIcon sx={{color: 'white'}} onClick={handleClose}/>
        </IconButton>
    </React.Fragment>

)

  return (
    <div>
      <Button onClick={handleClick}>Snackbarı aç</Button>
      <Snackbar 
      open={openSnackbar}
      message="Hata mesajı aldınız"
      action={action}
      autoHideDuration={1000}
      onClose={handleClose}
      anchorOrigin={{vertical:'bottom', horizontal:'right'}}
      />
    </div>
  )
}

export default LessonSnackbar
