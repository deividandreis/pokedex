import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <img
        alt="PokéAPI"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        className="pokeapi-image"
      />
      <Searchbar />
    </nav>
  );
};

export default Navbar;
