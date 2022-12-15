import React, { useContext } from "react";
import FaviriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FaviriteContext);

  return (
    <nav>
      <img
        alt="PokéAPI"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        className="pokeapi-image"
      />
      <div className="favorite">{favoritePokemons.length}💔</div>
    </nav>
  );
};

export default Navbar;
