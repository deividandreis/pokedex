import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchAPI from "./api"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="search" element={<SearchAPI />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
