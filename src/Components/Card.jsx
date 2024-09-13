import React from "react";
import { Link } from "react-router-dom";
import { useContexGlobal } from "./utils/global.context";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const Card = ({ dentist }) => {
  const { dispatch, state } = useContexGlobal();
  const isFav = state.favs.find((fav) => fav.id === dentist.id)
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: isFav? "REMOVE_FAVS" : "ADD_FAVS", payload: dentist });
  };

  return (
    <>
    <div className="card">
        <CardActionArea>
          <Link to={"/dentist/" + dentist.id}>
          <CardMedia
            component="img"
            height="150"
            image="/images/doctor.jpg"
            alt="Imagen doctor generica"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {dentist.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {dentist.username}
            </Typography>
          </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={addFav}>
            {isFav? "❤" : "🤍"}
          </Button>
        </CardActions>
      </div>
    </>
  );
};

export default Card;
