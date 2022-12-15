import React from "react";

const FaviriteContext = React.createContext({
  favoritePokemons: [],
  updateFaviritePokemons: (id) => null,
});

export const FavoriteProvider = FaviriteContext.Provider;
export default FaviriteContext;
