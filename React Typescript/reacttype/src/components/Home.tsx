import React from 'react'
import { DataComing } from './Propstypes'//type export ettik burada çağırdık

//// props geçerken typescript kullanma
/* type DataComing={
    name: string;
    courseNumber: number;
    isBest: boolean;
} */

function Home(props:DataComing) {
  return (
    <div>
     {props.name} eğitimine Hoş geldiniz. Kurs sayısı {props.courseNumber}. 
     {props.isBest ? <p> en iyi  react eğitimi bu eğitimim </p> : <p> en iyi  react eğitimi bu eğitim im ileride</p>}
    </div>
  )
}

export default Home
