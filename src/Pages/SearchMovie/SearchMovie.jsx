import React, { Suspense, useEffect, useState } from 'react';
import css from './SearchMovies.module.css';
import { SearchMoviesItem } from './SearchMovieItem';
import { searchMovies } from 'API/api';
import { useSearchParams } from 'react-router-dom';
import { LoadMore } from 'components/LoadMore/LoadMore';

export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalMovies, setTotalMovies] = useState(0);

  const ifBtnHidden = movies.length === totalMovies;

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    searchMovies(query, page).then(response => {
      if (response.length === 0) {
        alert('No movies found. Please try a different search query.');
        return;
      }
      setMovies(prevMovies => [...prevMovies, ...response.results]);
      setTotalMovies(response.total_results);
    });
  }, [searchParams, page]);

  const onLoadMore = () => {
    if (totalMovies === movies.length) {
      alert("We're sorry, but you've reached the end of search results.");
      return;
    }

    setPage(prevPage => prevPage + 1);
  };

  const onSubmit = e => {
    e.preventDefault();

    setMovies([]);
    setPage(1);
    setSearchParams({ query: e.target.searchQuery.value });
  };

  return (
    <Suspense>
      <div className="css.container">
        <form className={css.movieForm} onSubmit={onSubmit}>
          <input
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search movies..."
            className={css.movieInput}
          />
          <button className={css.movieBtn} type="submit"></button>
        </form>
        <SearchMoviesItem movies={movies} />
        {movies.length > 0 && !ifBtnHidden && (
          <LoadMore onClick={onLoadMore} className={'movieBtn'}>
            Load more
          </LoadMore>
        )}
      </div>
    </Suspense>
  );
};
