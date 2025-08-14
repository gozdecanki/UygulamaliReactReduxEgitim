import React,{useState} from 'react'
import {Stack,Box, Skeleton} from '@mui/material';

const LessonSkeleton = () => {

    const [loading, setLoading] = useState(true)
  return (
    <Box>
      {loading? 
         (<Skeleton width={250} height={145} animation='wave'/>) 
         :
         (<img src='https://source.unsplash.com/random/256*144'
             alt= "skeleton" width={250} height={145}/>)
       
       }
    </Box>
  )
}

export default LessonSkeleton
