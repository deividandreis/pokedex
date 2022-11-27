import { useSearchParams } from "react-router-dom";

const SearchAPI = async () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("deu merda" + error);
  }
};

export default SearchAPI;
