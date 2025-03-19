import MovieCard from '../components/MovieCard.jsx';

import axios from 'axios';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    console.log('Fetching movies...');

    axios
      .get('http://localhost:3000/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <h1 className="text-primary">Bool Movies</h1>
      <h2>Qui andranno tutti i Film</h2>
      <div className="row row-cols-3">
        {renderMovies()}
      </div>
    </>
  );
}