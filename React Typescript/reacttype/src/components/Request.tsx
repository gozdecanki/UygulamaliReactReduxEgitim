import React from 'react'

type RequestProps ={
    status: "loading" | "success" | "error";// burada bu 3 değerden farklı birşey gelmemesini sağlamış oluyoruz 
                                           // app.tsx den gelen değer bunlardan biri olmalıdır.başka bir değer gelirse program çalışmaz
                                           //istediğimiz string ifadeyi type olarak tanımlamış olduk
}
//type da veya kullanımı
function Request(props: RequestProps) {

    let message ="";
    if(props.status==='loading'){
        message="Yükleniyor"
    }
      if(props.status==='success'){
        message="Başarılı"
    }
      if(props.status==='error'){
        message="Hata"
    }
  return (
    <div>
      {message}
    </div>
  )
}

export default Request
