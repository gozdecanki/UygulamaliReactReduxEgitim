import { Link , Box} from '@mui/material'
import React from 'react'

const LessonLink = () => {
  return (
   <Box>
       {/* <Link href="https://github.com/gozdecanki?tab=repositories">websiteme git</Link>
       <Link href="https://github.com/gozdecanki?tab=repositories" color="error">websiteme git</Link>
       <Link href="https://github.com/gozdecanki?tab=repositories" color="error" variant='body2'>websiteme git</Link> */}

         <Link href="https://github.com/gozdecanki?tab=repositories" underline="none">websiteme git</Link>
         <Link href="https://github.com/gozdecanki?tab=repositories" underline="hover">websiteme git</Link>
         <Link href="https://github.com/gozdecanki?tab=repositories" underline="always">websiteme git</Link>
         {/* <Link href="https://github.com/gozdecanki?tab=repositories"  component="button" onClick={()=>{
            console.log("Merhaba")
         }} >websiteme git</Link> */}
 
 
 
   </Box>
       
   
  )
}

export default LessonLink