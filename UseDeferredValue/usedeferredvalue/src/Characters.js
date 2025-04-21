import { useMemo, useDeferredValue } from 'react';
function Characters({ input }) {

/* useDeferredValue, bir değerin ertelenmiş (deferred) versiyonunu verir.
 Ana değer güncellendiğinde, useDeferredValue'nun döndürdüğü değer hemen değişmez, onun yerine daha sonra güncellenir. */
//burada ana değerimiz inputu girdiğimiz kısım, deferred olan ise listemizin olduğu kısımdır.
//Bu sayede input alanı hemen tepki verirken, liste render’ı biraz gecikir — yani pahalı iş ertelenir, UX daha akıcı olur.
  const deferredValue = useDeferredValue(input);
  const myList = useMemo(() => {
    const myArray = [];
    for (let i = 0; i < 3000; i++) {
      myArray.push(<div key={i}>{deferredValue}</div>);
    }
    return myArray;
  }, [deferredValue]);
  return myList;
}

export default Characters;
