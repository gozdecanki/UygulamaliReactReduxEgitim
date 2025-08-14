import React,{useState} from 'react'
import {Dialog,DialogContent,DialogContentText,DialogActions,Button, DialogTitle} from '@mui/material';

const LessonDialog = () => {

const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={()=>{setIsOpen(true)}}>Dialogu aç</Button>
      <Dialog open={isOpen} onClose={()=>setIsOpen(false)}>
        <DialogTitle>Hangisini seviyorsun?</DialogTitle>
        <DialogContent>
           <DialogContentText>FrontEnd frameworklerinden hangisini seviyorsunuz?</DialogContentText>
            <DialogActions>
                <Button onClick={()=>{setIsOpen(false)}} >Angular</Button>
                <Button onClick={()=>{setIsOpen(false)}}>React Js</Button>
            </DialogActions>
       
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LessonDialog
