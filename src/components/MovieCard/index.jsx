import { URL_IMG } from 'services/movies-api';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import s from './index.module.css';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <div>
      {movie && (
        <div className={s.movieList}>
          <div className={s.movieCard}>
            <img
              src={URL_IMG + movie.poster_path}
              alt={movie.title || movie.name}
              width="300"
            />
            <div className={s.movieInfo}>
              <h2 className={s.title}>{movie.title || movie.name}</h2>
              <p className={s.text}>
                <b>Release date:</b> {movie.release_date}
              </p>
              <p className={s.text}>
                <b>User Score:</b> {movie.vote_average}
              </p>
              <p className={s.text}>
                <b>Genres:</b> {movie.genres.map(genr => genr.name).join(' / ')}
              </p>
              <p className={s.text}>
                <b>Runtime:</b> {movie.runtime} min.
              </p>
              <p className={s.text}>
                <b>Overview:</b>
              </p>
              <p className={s.text}>{movie.overview}</p>
            </div>
          </div>
          <hr />
          <nav className={s.nav}>
            <NavLink
              to={'cast'}
              className={({ isActive }) =>
                isActive ? `${s.active}` : `${s.inactive}`
              }
            >
              Cast
            </NavLink>
            <NavLink
              to={'reviews'}
              className={({ isActive }) =>
                isActive ? `${s.active}` : `${s.inactive}`
              }
            >
              Reviews
            </NavLink>
          </nav>
          <hr />
        </div>
      )}
      <Suspense fallback={'Loader'}>
        <Outlet />
      </Suspense>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
