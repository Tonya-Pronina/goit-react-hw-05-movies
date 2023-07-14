import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home/Home'));
const SearchMovies = lazy(() => import('../Pages/SearchMovie/SearchMovie'));
const Common = lazy(() => import('./Common/Common'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));
const MovieData = lazy(() => import('../Pages/MoviesData/MoviesData'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<Home />} />
          <Route path="/SearchMovies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieData />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
