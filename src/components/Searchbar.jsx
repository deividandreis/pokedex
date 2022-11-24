import React, { useState } from "react";

const Searchbar = () => {
  const [serch, setSearch] = useState("");

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="serach-btn">
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
