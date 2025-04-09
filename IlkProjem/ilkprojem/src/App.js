import logo from './logo.svg';
import './App.css';

function App() {

const nameSurname = "Gözde Erdoğan" ;
const students = 43000;
const dogruMu = false;
const date= 'date';
const url = 'https://picsum.photos/250/250';

  return (
    // <div >
    //   <h1 >İsim soyisim : {nameSurname}</h1>
    //   <p>Öğrenci Sayısı :{students}</p>
    //   <p>Doğru mu:{dogruMu}</p>   {/*boolean değerler ve null undefined değerler tarayıcıda yazmaz */}
    //   <input type="text"/>

    //   {dogruMu ? <p>Öğrenci Sayısı</p> : <p>Kur Sayısı</p>}
    //   <input type={date}/>
    //   <img src={url} alt=""></img>
    // </div>

    //css style
    // <div className="box"></div>

    //css inline
     <div style={{
      width:'250px', height:'250px',
      backgroundColor: 'red',
      fontSize:'30px'
     }}></div>

  );
}

export default App;
