import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const HandleInput = (props) => {
    navigate(`/search?q=${search}`);
    setSearch("");
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
        <button onClick={HandleInput}>Buscar</button>1
      </div>
    </div>
  );
};

export default Searchbar;
