import React from 'react';
import {Avatar,Stack, AvatarGroup} from '@mui/material';

const LessonAvatar = () => {
  return (
    <Stack direction="row" spacing={4} >
      <AvatarGroup>
        <Avatar sx={{marginRight:10}} src="https://randomuser.me/api/portraits/women/56.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
      </AvatarGroup>

      <AvatarGroup max={4}>
        <Avatar sx={{marginRight:10, bgcolor:'primary.light', width:50, height:50}} variant='square'>Gözde</Avatar>
        <Avatar sx={{marginRight:10, bgcolor:'success.light', width:50, height:50}} variant='rounded'>Can</Avatar>
        <Avatar sx={{marginRight:10, bgcolor:'primary.light', width:50, height:50}} variant='square'>Gözde</Avatar>
        <Avatar sx={{marginRight:10, bgcolor:'success.light', width:50, height:50}} variant='rounded'>Can</Avatar>
        <Avatar sx={{marginRight:10, bgcolor:'primary.light', width:50, height:50}} variant='square'>Gözde</Avatar>
        <Avatar sx={{marginRight:10, bgcolor:'success.light', width:50, height:50}} variant='rounded'>Can</Avatar>
      </AvatarGroup>
    </Stack>
  )
}

export default LessonAvatar
