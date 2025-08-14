import { Stack, Divider } from '@mui/material'
import React from 'react'

const LessonStack = () => {
  return (
    <Stack 
    direction={{xs:'column',sm:'row'}}
    justifyContent="center"
    alignItems="center"
    spacing={{xs:1,sm:2,md:4}}
    divider={<Divider orientation='vertical' flexItem/>}>
        <div>İtem 1</div>
        <div>İtem 2</div>
        <div>İtem 3</div>
    </Stack>
  )
}

export default LessonStack
