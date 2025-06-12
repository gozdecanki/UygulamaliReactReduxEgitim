import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
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

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  /*  console.log(formik) */
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          id="email"
          placeholder="Mail adresinizi giriniz"
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          id="age"
          placeholder="Yaşınızı giriniz"
          onChange={handleChange}
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          id="password"
          placeholder="Şifrenizi giriniz"
          onChange={handleChange}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          value={values.confirmPassword}
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz"
          onChange={handleChange}
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Kaydet
      </button>
        <Link to="/portal" className='formLink'> Portala Git</Link>
    </form>
  );
}

export default GeneralForm;
