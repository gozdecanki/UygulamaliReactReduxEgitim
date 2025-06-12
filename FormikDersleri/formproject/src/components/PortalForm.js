import React from 'react'
import {Form, Formik} from 'formik'
import CustomInput from './CustomInput';
import { advanceSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import {Link} from 'react-router-dom'



const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(
      resolve,
      1000
    ); /* submit yapıldıktan sonra 1sn sonra buton aktif olsun  */
  });

  actions.resetForm(); /* 1 sn sonra formun içeriği temizlenecek */
};

function PortalForm() {
  return  <> <Formik
       initialValues={{ username: '', university: '', isAccepted: false}}
       onSubmit={onSubmit}
       validationSchema={advanceSchema}
     >
       {({isSubmitting}) => (
         <Form>
          <CustomInput
             label="Kullanıcı Adı"
              name="username" 
              type="text" 
              placeholder="Kullanıcı adınızı giriniz"
              />

              <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen üniversitenizi seçiniz"
              >
                <option value="">Lütfen üniversitenizi seçiniz</option>
                <option value="bogaziçi">Boğaziçi Üniversitesi</option>
                <option value="gsü">Galatasaray Üniversitesi</option>
                <option value="odtü">Orta Doğu Teknik Üniversitesi</option>
                <option value="itü">İstanbul Teknik Üniversitesi</option>
              </CustomSelect>
              <CustomCheckbox 
               type="checkbox"
               name="isAccepted"
              />
              <button disabled={isSubmitting} type="submit">Kaydet</button>
              <Link to="/" className='formLink'> Ana Forma Git</Link>
         </Form>
       )}
     </Formik>
     </>
  
}

export default  PortalForm;