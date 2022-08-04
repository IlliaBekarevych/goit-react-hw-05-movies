import { Link } from 'react-router-dom';
import { URL_IMG } from 'services/movies-api';
import s from './index.module.css';
import PropTypes from 'prop-types';

function MoviesGallery({ moviesList }) {
  return (
    <ul className={s.movies_gallery}>
      {moviesList.map(({ id, title, name, poster_path }) => (
        <li key={id} className={s.movie_item}>
          <Link to={`/movies/${id}`}>
            <img
              src={URL_IMG + poster_path}
              alt={title || name}
              className={s.film_img}
            />
            <p className={s.title}>{title || name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesGallery.propTypes = {
  moviesList: PropTypes.array.isRequired,
};

export default MoviesGallery;
