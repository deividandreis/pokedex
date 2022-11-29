import React, { useState } from "react";
import { SearchPokemon } from "../api";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const HandleButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await SearchPokemon(pokemon);
    setPokemon(result);
    console.log("resultado " + result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="serach-btn">
        <button onClick={HandleButtonClickHandler}>Buscar</button>
      </div>

      {pokemon ? (
        <div>
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
