import React, { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Error from "./components/Error";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import { api_key, base_url } from "./variables/variables";
import getData from "./utils/getData";
import "./styles/style.css";
import "./styles/media.css";

const App = () => {
  const [apiKey] = useState(api_key);
  const [baseUrl] = useState(base_url);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [totalPages, setTotalPages] = useState(undefined);
  const [page, setPage] = useState(undefined);
  const [prevQuery, setPrevQuery] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [searchBtnRef, setSearchBtnRef] = useState(undefined);

  const getMovies = async e => {
    e.preventDefault();

    const inputValue = e.target.elements.query.value;
    const query = inputValue.trim();

    if (query) setLoading(true);
    if (error) setLoading(false);

    const pageChoice = query !== prevQuery ? setPage(1) : page;
    const url = `${baseUrl}&api_key=${apiKey}&query=${query}&page=${pageChoice}`;
    const data = await getData(url);

    const results = data.total_results;
    const movies = data.results;
    const countOfPages = data.total_pages;
    const pageLimit = countOfPages > 10 ? 10 : countOfPages;
    
    const clearState = () => {
      setMovies([]);
      setTotalPages(0);
      setLoading(false);
    };

    if (!query) {
      clearState();
      setError(undefined);
    } else if (!results) {
      clearState();
      setError("Фильм не найден.");
    } else if (results) {
      setMovies(movies);
      setPrevQuery(query);
      setTotalPages(pageLimit);
      setError(undefined);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchForm getMovies={getMovies} setSearchBtnRef={setSearchBtnRef} />
      {error ? <Error error={error} /> : <MovieList movies={movies} />}
      {loading && <Loader />}
      {!loading && totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          setMovies={setMovies}
          searchBtnRef={searchBtnRef}
        />
      )}
    </div>
  );
};

export default App;
