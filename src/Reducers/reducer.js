export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTIST":
        return { ...state, dentists: action.payload };
      case "ADD_FAVS":
        return { ...state, favs: [...state.favs, action.payload] };
      case "REMOVE_FAVS":
        const filteredFavs = state.favs.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favs: filteredFavs };
      case "LOADING":
        return { ...state, loading: action.payload };
      default:
        throw new Error("Acción no existente");
    }
  };