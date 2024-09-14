import React from "react";
import { Link } from "react-router-dom";
import { useContexGlobal } from "./utils/global.context";
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import CardStyles from '../Styles/Theme.module.css';
const Card = ({ dentist }) => {
  const { dispatch, state } = useContexGlobal();
  const isFav = state.favs.find((fav) => fav.id === dentist.id)
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: isFav? "REMOVE_FAVS" : "ADD_FAVS", payload: dentist });
  };

  return (
    <>
    <div className={ state.theme? "card " + CardStyles.dark : "card "  }>
        <CardActionArea >
          <Link to={"/dentist/" + dentist.id}>
          <CardMedia
            component="img"
            height="150"
            image="/images/doctor.jpg"
            alt="Imagen doctor generica"
          />
          <CardContent className={ state.theme? CardStyles.dark : ""} height="150">
            <Typography gutterBottom variant="h5" component="div">
              {dentist.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {dentist.username}
            </Typography>
          </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small" color={state.theme? "warning" : "primary" }onClick={addFav}>
            {isFav? "❤" : "🤍"}
          </Button>
        </CardActions>
      </div>
    </>
  );
};

export default Card;
