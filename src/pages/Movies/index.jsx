import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovie } from 'services/movies-api';
import SearchBar from 'components/SearchBar';
import MoviesGallery from 'components/MoviesGallery';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'right-top',
});

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState(
    searchParams.get('searchName') ?? ''
  );
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchName) {
      return;
    }

    setSearchParams({ searchName });

    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await fetchSearchMovie(searchName);
        setMoviesList(results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetch();
  }, [searchName, setSearchParams]);

  const onSubmit = name => {
    if (!name) {
      Notiflix.Notify.failure('Please. Enter the name of the movie.');
    }
    if (searchName === name) {
      return;
    }
    setSearchName(name);
    setMoviesList([]);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {error && <p>{error}</p>}
      <MoviesGallery moviesList={moviesList} />
    </div>
  );
}
export default MoviesPage;
