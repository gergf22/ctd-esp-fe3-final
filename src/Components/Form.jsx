import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [contacto, setContacto] = useState({ nombre: "", email: "" });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => {
    setContacto({...contacto, nombre:e.target.value})
  }

  const handleChangeEmail = (e) => {
    setContacto ({ ...contacto, email:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (
      contacto.nombre.trim().length > 5 &&
      mailRegex.test(contacto.email)
    ) {
      setShow(true)
      setError(false)
      console.log(contacto);
      
    } else {
      setError(true)
      setShow(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input type="text" value={contacto.nombre} onChange={handleChangeName} placeholder="Ingresa tu nombre y apellido"/>
        <label>Email de contacto</label>
        <input type="email" value={contacto.email} onChange={handleChangeEmail} placeholder="Ingrese su correo"/>
        <button>Contactenme</button>
      </form>
      {show? <h2>Gracias {contacto.nombre}, te contactaremos cuando antes vía mail</h2> : null}

      {error? <h4> Por favor verifique su información nuevamente. </h4> : null}
    </div>
  );
};

export default Form;
