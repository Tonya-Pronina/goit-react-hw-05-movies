import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'API/api';
import css from './Home.module.css';
import { SearchMoviesItem } from 'Pages/SearchMovie/SearchMovieItem';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(response => {
      setMovies(response.results);
    });
  }, []);
  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <SearchMoviesItem movies={movies} />
    </div>
  );
};
