import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import Addd from './Addd';

const MovieList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddMovie = (newMovie) => {
    addMovie(newMovie);
    handleClose();
  };

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      <button onClick={handleShow} className="btn btn-primary">
        ADD MOVIES
      </button>

      <Addd show={show} handleClose={handleClose} addMovie={handleAddMovie} />
    </div>
  );
};

export default MovieList;




