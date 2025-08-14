import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={50} color="secondary">
        <MailIcon/>
      </Badge>
      <Badge badgeContent={50} max={40} color="secondary">
        <MailIcon/>
      </Badge>
      <Badge badgeContent={50} color="secondary" 
            anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
        <MailIcon/>
      </Badge>
      <Badge badgeContent={50} color="secondary" 
            anchorOrigin={{vertical:'top',horizontal:'left'}}>
        <MailIcon/>
      </Badge>
    </Stack>
  )
}

export default LessonBadge
