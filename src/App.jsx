import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons, getPokemonData } from "./api";

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

// console.log("teste dos pokemons",pokemons);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();

      const promisses = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promisses);

      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("Fetch Pokemons error" + error);
    }
  };

  useEffect(() => {
    fetchPokemons()
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
