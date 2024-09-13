import React from "react";
import Card from "../Components/Card";
import { useContexGlobal } from "../Components/utils/global.context";
import { Box, CircularProgress } from "@mui/material";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContexGlobal();

  return (
    <>
      <h1>Home</h1>
      {state.loading ? (
        <div className="card-grid">
          <CircularProgress />
        </div>
      ) : (
        <div className="card-grid">
          {state.dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
