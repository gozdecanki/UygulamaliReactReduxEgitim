import React from 'react'
import { instructorProps } from './Propstypes' //type export ettik burada çağırdık

 {/* props da object gönderme */}
    
/* type instructorProps ={
    instructorNameLastName:{
        firstName: string;
        lastName: string;  
    }
} */

function Instructor(props: instructorProps) {
  return (
    <div>
      {props.instructorNameLastName.firstName} {props.instructorNameLastName.lastName}
    </div>
  )
}

export default Instructor
