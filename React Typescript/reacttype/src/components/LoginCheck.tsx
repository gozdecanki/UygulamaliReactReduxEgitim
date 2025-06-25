import React from 'react'
import {useState} from 'react'
//usestate'te type kullanımı
function LoginCheck() {

//const [user, setUser] = useState(null);// burada ilk değer atamasını null verip aşağıda tanımlama yaptığımızda ide de hata almaya başlarız. tip uyumsuzluğu oluşur.
                                        //Object literal may only specify known properties, and 'name' does not exist in type '(prevState: null) => null'.

//bu sebeple type belirtiyoruz
type UserType={
        name:string;
        email:string;
        phone:string;

}  

//tanımlamayı bu şekilde değiştiriyoruz
const [user, setUser] = useState<UserType | null>(null);// burada ya nulldır ya da UserType dır tipi 
//const [user, setUser] = useState<UserType | null>({} as UserType);// tanımlamayı bu şekilde de yapabiliriz

const handleLogin =()=>{
    setUser({
        name:"Can",
        email:"hdh@hotmail.com",
        phone:"05046646566"
    });
}
const handleLogout =()=>{
    setUser(null);
    //veya 2. tanımlamaya göre
   // setUser({} as UserType);
}

  return (
    <div>
      <button onClick={handleLogin}>Giriş yap</button>
      <button onClick={handleLogout}>Çıkış yap</button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  )
}

export default LoginCheck;
