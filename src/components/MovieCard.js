import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlist, toggleWatchlist }) {
  const handleError = (event) => {
    event.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 5 && rating < 8) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlist}
            onChange={() => toggleWatchlist(movie.id)}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchlist ? "Watchlisted" : "Add to watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
