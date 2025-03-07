import React from "react";
import "../styles.css";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "5":
        return movie.rating >= 5;
      case "8":
        return movie.rating >= 8;
      default:
        return true;
    }
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            className="filter-dropdown"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          >
            <option value="All Genres">All Genres</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>

        <div className="filter-slot">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            className="filter-dropdown"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          >
            <option value="All">All</option>
            <option value="5">5+</option>
            <option value="8">8+</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlist={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
