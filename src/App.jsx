import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons, getPokemonData, SearchPokemon } from "./api";
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "-1";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [favorites, setFavorites] = useState([]);

  const [notFound, setNotFound] = useState();

  const itensPerPages = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
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

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFaviritePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favortiteIndex = favorites.indexOf(name);

    if (favortiteIndex >= 0) {
      updateFavorites.slice(favortiteIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem(
      favortiteIndex,
      JSON.stringify(updateFavorites)
    );
    setFavorites(updateFavorites);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);

    const result = await SearchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFaviritePokemons: updateFaviritePokemons,
      }}>
      <div className="app">
        <Navbar />
        <Searchbar onSearch={onSearchHandler} />

        {notFound ? (
          <div className="not-found-text">Meteu essa ?!</div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;
