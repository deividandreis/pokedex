import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Searchbar />
    </div>
  );
}

export default App;
