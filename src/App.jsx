import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons, getPokemonData } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itensPerPages = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPages, itensPerPages * page);
      setTotalPages(Math.ceil(data.count / itensPerPages));
      const promisses = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promisses);

      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("Fetch Pokemons error" + error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
