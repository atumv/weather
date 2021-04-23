import React from "react";
import dateConverter from "../utils/dateConverter";

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies
      .filter(movie => movie.poster_path)
      .map(movie => (
        <div className="card" key={movie.id}>
          <img
            className="card-image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
              movie.poster_path
            }`}
            alt={`${movie.title} poster`}
          />
          <div className="card-content">
            <h3 className="card-title">{movie.title}</h3>
            <p className="card-info">
              Премьера: {dateConverter(movie.release_date)}
            </p>
            <p className="card-info">Рейтинг: {movie.vote_average}</p>
            <p className="card-description">{movie.overview}</p>
          </div>
        </div>
      ))}
  </div>
);

export default MovieList;
