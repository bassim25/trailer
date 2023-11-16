import React from 'react';
import { Link } from 'react-router-dom';
import './moviecard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" width="250" height="350" alt=" " src={movie.im} />
          <span className="minutes">{movie.duration}</span>
          <p className="type">{movie.gener}</p>
        </div>
        <div className="movie_tit">
          <h1 className="text">{movie.title}</h1>
        </div>
        <div className="movie_desc">
          <h3 className="text">{movie.description}</h3>
        </div>
        <div className="blur_back bright_back" width="250" height="320">
          <img src={movie.back} width="870" height="380" alt="background" />
        </div>
      </div>
      <button className="btn">Search</button>
      <div>
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.im} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

