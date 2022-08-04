import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/movies-api';
import MoviesGallery from 'components/MoviesGallery';
import s from './index.module.css'

function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await fetchTrending(countPage);

        setMoviesList(results);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, [countPage]);

  return (
    <section className={s.hero}>
      <h1 className={s.title}>Trending today</h1>
      {error && <p>{error}</p>}
      <MoviesGallery moviesList={moviesList} />
    </section>
  );
}
export default HomePage;
