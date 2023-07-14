import React from 'react';
import css from './SearchMovies.module.css';
import { nanoid } from 'nanoid';
import { useLocation, Link } from 'react-router-dom';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_URL = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

const SearchMoviesItem = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <ul className={css.searchMoviesList}>
        {movies.map(movie => (
          <li key={nanoid(7)} className={css.searchMoviesItem}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                className={css.searchMoviesImg}
                src={
                  movie.poster_path ? IMG_URL + movie.poster_path : DEFAULT_URL
                }
                alt={movie.title}
              />
              <p className={css.searchMoviesText}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMoviesItem;
