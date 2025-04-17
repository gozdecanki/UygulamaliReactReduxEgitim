import logo from './logo.svg';
import './App.css';
import AuthContext from './context/auth-context';
import Auth from './Auth';
import {useState} from 'react';

function App() {

  const [authstatus, setAuthStatus] = useState(false);
const loginAuth = () =>{
console.log("Metodu tetikledim.");
setAuthStatus(!authstatus);
}

  return (
    <AuthContext.Provider value = {{status:authstatus, login : loginAuth}}>
      <Auth/>
    </AuthContext.Provider>
  );
}

export default App;
