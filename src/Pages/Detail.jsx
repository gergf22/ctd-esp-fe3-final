import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  const [dentist, setDentist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url)
      .then((res) => {
        setDentist(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-grid">
      
      {loading ? (
          <div>
            <CircularProgress />
          </div>
      ) : (
        <div>
          
          {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
          {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          <h1> Detail Dentist {dentist.id} </h1>
          <h2>{dentist.name}</h2>
          <h3>📧: {dentist.email}</h3>
          <h3>📞: {dentist.phone}</h3>
          <h3>🌐: {dentist.website}</h3>
        </div>
      )}
      
    </div>
  );
};

export default Detail;
