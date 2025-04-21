import { useState, useTransition } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [myList, setMyList] = useState([]);
  const [isPending, startTransition] = useTransition();

  //bu kısımda 2 kez render olma durumu var dikkatli kullanılmalı
  const handleChange = (e) => {
    setInput(e.target.value);

    //göz ardı ettiğimiz kısım için yazıyoruz
    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 2000; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />

      {isPending
        ? 'Yükleniyor...'
        : myList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}

export default App;
