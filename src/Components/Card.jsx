import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useContexGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { dispatch } = useContexGlobal();
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_FAVS", payload: dentist });
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={"/dentist/" + dentist.id}>
        <h2>
          {dentist.id} {dentist.name}
        </h2>
      </Link>
      <h4>{dentist.username}</h4>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        ⭐ 
      </button>
    </div>
  );
};

export default Card;
