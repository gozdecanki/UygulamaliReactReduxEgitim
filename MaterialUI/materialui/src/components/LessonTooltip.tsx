import React from 'react'
import {Tooltip,IconButton, Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const LessonTooltip = () => {
  return (
   <Stack>
     <Tooltip title="Sil" placement='top'>
      <IconButton>
        <DeleteIcon/>
      </IconButton>
    </Tooltip>
     <Tooltip title="Sil" placement='left'>
      <IconButton>
        <DeleteIcon/>
      </IconButton>
    </Tooltip>
   </Stack>
    
  )
}

export default LessonTooltip
