import React, { useState } from "react";
import FormStyles from "../Styles/Contact.module.css";
import { TextField } from "@mui/material";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [contacto, setContacto] = useState({ nombre: "", email: "" });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => {
    setContacto({ ...contacto, nombre: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setContacto({ ...contacto, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (contacto.nombre.trim().length > 5 && mailRegex.test(contacto.email)) {
      setShow(true);
      setError(false);
      console.log(contacto);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={FormStyles.formConteiner}>
        <TextField
          id="outlined-controlled"
          label="Nombre completo:"
          value={contacto.nombre}
          onChange={handleChangeName}
        />

        <TextField
          type="email"
          id="outlined-controlled"
          label="Email de contacto"
          value={contacto.email}
          onChange={handleChangeEmail}
        />

        <button className="favButton">Contactenme</button>
      </form>
      {show ? (
        <h3>
          Gracias {contacto.nombre}, te contactaremos cuando antes vía mail
        </h3>
      ) : null}

      {error ? (
        <h4 className={FormStyles.formError}>
          {" "}
          Por favor verifique su información nuevamente.{" "}
        </h4>
      ) : null}
    </div>
  );
};

export default Form;
