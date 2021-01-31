import React from "react";
import SearchMovies from "./components/SearchMovies";
import "./styles/style.css";
import "./styles/media.css";

function App() {
  return (
    <div className="app">
      <h1 className="header">Movie Db</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
