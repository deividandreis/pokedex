import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;

  const onLeftClickHandler = () => {
    console.log("volta");
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    console.log("avancar");
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="">
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>

      {loading ? (
        <div>Aguarde um momento</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
