import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../Reducers/reducer";

const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const initialState = { theme: false, dentists: [], favs: lsFavs, loading: true };

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: "GET_DENTIST", payload: res.data });
        setTimeout(() => {
          dispatch({ type: "LOADING", payload: false });
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContexGlobal = () => useContext(ContextGlobal);
