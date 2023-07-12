import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import('../Pages/Home/Home'));
// const SearchMovies = lazy(() => import('../Pages/SearchMovie/SearchMovie'));
// const Common = lazy(() => import('./Common/Common'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Review = lazy(() => import('./Review/Review'));
// const MovieData = lazy(() => import('../Pages/MoviesData/MoviesData'));
const Home = lazy(
  () =>
    new Promise((resolve, reject) => {
      import('../Pages/Home/Home')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject);
    })
);
const SearchMovies = lazy(
  () =>
    new Promise((resolve, reject) => {
      import('../Pages/SearchMovie/SearchMovie')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject);
    })
);
const Common = lazy(
  () =>
    new Promise((resolve, reject) => {
      import('./Common/Common')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject);
    })
);
const Cast = lazy(
  () =>
    new Promise((resolve, reject) => {
      import('./Cast/Cast')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject);
    })
);
const Review = lazy(
  () =>
    new Promise((resolve, reject) => {
      import('./Review/Review')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject);
    })
);
const MovieData = lazy(
  () =>
    new Promise((resolve, reject) => {
      import('../Pages/MoviesData/MoviesData')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject);
    })
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<Home />} />
          <Route path="SearchMovies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieData />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews\" element={<Review />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
