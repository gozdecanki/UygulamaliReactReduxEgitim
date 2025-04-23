
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import History from './components/History';
import Team from './components/Team';
import Company from './components/Company';
import WrongPath from './components/WrongPath';
import Members from './components/Members';
import MemberDetail from './components/MemberDetail';

const LazyAboutUs = React.lazy(()=> import('./components/AboutUs'))

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      {/*  http://localhost:3000 home componenti çalışsın */}
      <Route path='/'  element={<Home/>} /> 
      {/* http://localhost:3000/aboutUs  şeklinde çalışacak*/}
      {/* <Route path='/aboutUs'  element={<AboutUs/>} />  */}

      <Route path='/aboutUs'       
       element={
       <React.Suspense> 
        <LazyAboutUs/> 
        </React.Suspense>}    
        /> 
    
      <Route path='/mission'  element={<Mission/>} /> 
      <Route path="/history"  element={<History/>} >
         <Route path='company'  element={<Company/>} />
         <Route path='team'  element={<Team/>}/>
      </Route>
      <Route path='/members'  element={<Members/>} /> 
      <Route path='/members/:memberId'  element={<MemberDetail/>} /> 
      <Route path='*'  element={<WrongPath/>} /> 
     </Routes>
    </div>
  );
}

export default App;
