export const SearchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await fetch(url);
    const data = await res.json();

    return await data;

  } catch (error) {
    console.log(error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();

    return await data;

  } catch (error) {
    console.log(error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return await data;

  } catch (error) {
    console.log(error);
  }
};
