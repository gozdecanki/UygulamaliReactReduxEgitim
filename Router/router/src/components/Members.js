import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Members() {

   const [searchParams, setSearchParams] =useSearchParams();
   const isActive = searchParams.get('filter') ==='active';

  return (
   <>
    <div> Members </div>
    {/* http://localhost:3000/members?filter=active  url de bu şekilde görünecek*/}
    <button onClick={()=>setSearchParams({filter:'active'})}>Aktif Üyeler</button>

        {/* http://localhost:3000/members  url de bu şekilde görünecek*/}
    <button onClick={()=>setSearchParams()}>Tüm Üyeler</button>
   {isActive ? <h2>Aktif üyeler</h2> : <h2>Tüm Üyeler</h2>}
   </>
      
  
  )
}

export default Members
