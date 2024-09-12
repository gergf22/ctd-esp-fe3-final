import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  const [dentist, setDentist] = useState([]);

  console.log(id);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url).then((res) => {
      setDentist(res.data);
    });
  }, []);

  console.log(dentist);
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{dentist.name}</h2>
      <h3>📧: {dentist.email}</h3>
      <h3>📞: {dentist.phone}</h3>
      <h3>🌐: {dentist.website}</h3>
    </>
  );
};

export default Detail;
