import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [can, setCan]= useState(0);
  const [gozde, setGozde]= useState(0);

  useEffect(()=>{
console.log('ilk kez render edildiğinde çalışır daha da çalışmaz');
  },[]);

useEffect(()=>{
  console.log('her zaman çalışır');
});

useEffect(()=>{
  console.log('ilk kez render edildiğinde çalışır ve Can değerinde bir değişiklik olduğuda');
},[can]);

useEffect(()=>{
  console.log('ilk kez render edildiğinde çalışır ve Gözde değerinde bir değişiklik olduğuda');
},[gozde]);

useEffect(()=>{
  console.log('ilk kez render edildiğinde çalışır ve Gözde veya Can değerinde bir değişiklik olduğuda');
},[can , gozde]);



  return (
    <div className="App">
    <div className="firstDiv">
      <button onClick={()=> setCan(can + 1)}>Can ++</button>
      <div>Can : {can} </div>
    </div>
    <div>
      <button onClick={()=> setGozde(gozde + 1)}>Gozde ++</button>
      <div>Can : {gozde} </div>
    </div>
    </div>
  );
}

export default App;
