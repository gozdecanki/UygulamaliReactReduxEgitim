import React from 'react'
import {useParams} from 'react-router-dom'

function MemberDetail() {
  /*   const params = useParams();
    const memberId= params.memberId; */
   /* veya  */
    const { memberId }= useParams();

  return (
    <div>  MemberDetail {memberId} </div>
      

  )
}

export default MemberDetail
