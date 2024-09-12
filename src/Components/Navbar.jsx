import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to={routes.home}>
        <h1>Home</h1>
      </Link>
      <Link to={routes.contact}>
        <h1>Contact</h1>
      </Link>
      <Link to={routes.favs}>
        <h1>Favoritos</h1>
      </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
