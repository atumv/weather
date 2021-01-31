import React, { useState, useRef } from "react";
import MovieList from "./MovieList";
import Loader from "./Loader";
import Pagination from "./Pagination";

const api_key = "3b33b8c8d2c93ecef17e3034abad89bd";

function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [totalPages, setTotalPages] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(undefined);
  const [prevMovie, setPrevMovie] = useState(undefined);
  const [error, setError] = useState(undefined);

  const getMovies = async e => {
    e.preventDefault();
    const movie = e.target.elements.movie.value;
    if (movie) setLoading(true);
    if (error) setLoading(false);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie}&page=${
      movie !== prevMovie ? setCurrentPage(1) : currentPage
    }&include_adult=false&language=ru-RU`;
    const request = await fetch(url);
    const response = await request.json();

    if (!movie) {
      setMovies([]);
      setTotalPages(0);
      setError(undefined);
      setLoading(false);
    } else if (!response.total_results) {
      setMovies([]);
      setTotalPages(0);
      setError("Фильм не найден.");
      setLoading(false);
    } else if (response.total_results) {
      setMovies(response.results);
      setTotalPages(response.total_pages > 10 ? 10 : response.total_pages);
      setPrevMovie(movie);
      setError(undefined);
      setLoading(false);
    }
  };

  const searchBtnRef = useRef();

  function changePage(e, pageNum) {
    e.preventDefault();
    setCurrentPage(pageNum);
    setMovies([]);
    setTimeout(() => searchBtnRef.current.click());
  }

  const moviesList = [
    "Шрек",
    "Пила",
    "Чужой",
    "Бэтмен",
    "Рэмбо",
    "Терминатор",
    "Аладдин",
    "Аватар",
    "Титаник",
    "Сияние",
    "Дракула"
  ];

  const randomIndex = Math.floor(Math.random() * moviesList.length);
  const randomMovie = moviesList[randomIndex];

  return (
    <>
      <form className="search-form" onSubmit={getMovies}>
        <input
          className="search-input"
          type="text"
          name="movie"
          placeholder={`Например, «${randomMovie}»`}
          autoFocus
        />
        <button className="search-btn" type="submit" ref={searchBtnRef}>
          Найти
        </button>
      </form>

      {error ? <p className="error">{error}</p> : <MovieList movies={movies} />}

      {loading && <Loader />}

      {loading === false && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          changePage={changePage}
        />
      )}
    </>
  );
}

export default SearchMovies;
