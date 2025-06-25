import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';
import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import ReducerExemple from './components/ReducerExample';
import ContextExample from './components/ContextExample';
import { ThemeContextProvider } from './components/ThemeContext';
import RefExemple from './components/RefExample';

function App() {

  const instructor={
    firstName:"Can",
    lastName:"Boz"
  }

  
  const instructorList= [ {
    firstName:"Can",
    lastName:"Boz"
  },
{
    firstName:"Ayse",
    lastName:"Bozzz"
  },
  {
    firstName:"Ali",
    lastName:"Bozzz"
  }
]
  return (
 <div className="App">
   {/*   <Home name="Can Boz" courseNumber={15} isBest= {true} /> propsları gönderirken değişken tipi önemli */}
    {/* <Instructor instructorNameLastName={instructor}/>
    <InstructorList instructorNameLastNameList={instructorList}/>
    <Request status="success"/> */}
     {/* <Request status="successs"/> bu şekilde gönderdiğimiz değeri hatalı yazarsak ide de hata verir */}
    {/*   <EventActions/>
      <LoginCheck/>
      */}
   {/*    <ReducerExemple/>
      <ThemeContextProvider>
        <ContextExample/>
      </ThemeContextProvider> */}
      <RefExemple/>
      
  </div>
   
  )
}

export default App;
