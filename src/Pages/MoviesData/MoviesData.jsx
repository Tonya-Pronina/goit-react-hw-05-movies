import React, { Suspense, useEffect, useState } from 'react';
import LoadMore from 'components/LoadMore/LoadMore';
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMoviesById } from 'API/api';
import css from './MoviesData.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_URL = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

const MovieData = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  console.log(movie);

  useEffect(() => {
    fetchMoviesById(movieId).then(response => {
      if (response) {
        setMovie(response);
      }
    });
  }, [movieId]);

  const onGoBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <div className={css.container}>
      <LoadMore onClick={onGoBack}>Back</LoadMore>
      {movie ? (
        <div className={css.movieTextBox}>
          <img
            className={css.movieImage}
            src={
              movie.poster_path ? `${IMG_URL}${movie.poster_path}` : DEFAULT_URL
            }
            alt={movie.title}
          />
          <div className={css.text}>
            <h1 className={css.title}>{movie.title}</h1>
            <ul className={css.list}>
              <li className={css.item}>
                <span className={css.rate}>Vote/Votes:</span>{' '}
                {movie.vote_average} / {movie.vote_count}
              </li>
              <li className={css.item}>
                <span className={css.rate}>Popularity:</span> {movie.popularity}
              </li>
            </ul>

            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={css.genresList}>
              {movie.genres &&
                movie.genres.map(genre => (
                  <li key={genre.name}>{genre.name}</li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div className={css.movieAddInfo}>
        <Link state={location.state} to={'Cast'}>
          Cast
        </Link>
        <Link state={location.state} to={'Reviews'}>
          Reviews
        </Link>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieData;
