import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppNavigate from 'components/AppNavigate';
import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/Home'));
const MoviesPage = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/MovieDetails/Cast'));
const Reviews = lazy(() => import('pages/MovieDetails/Reviews'));

function App() {
  return (
    <div>
      <AppNavigate />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
