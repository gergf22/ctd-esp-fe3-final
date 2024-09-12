import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const initialState = { theme: "", dentists: [], favs: lsFavs };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, dentists: action.payload };
    case "ADD_FAVS":
      return {...state, favs:[...state.favs, action.payload]}
    default:
      throw new Error("Acción no existente");
  }
};

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTIST", payload: res.data });
      setTimeout(() =>{

      }, 2000)
    });
  }, []);

  useEffect (() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  },[state.favs])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContexGlobal = () => useContext(ContextGlobal);
