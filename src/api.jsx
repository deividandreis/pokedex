export const SearchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("deu merda" + error);
  }
};
