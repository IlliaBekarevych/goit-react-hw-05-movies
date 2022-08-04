import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieCard from 'components/MovieCard';
import { fetchMoviesDetails } from 'services/movies-api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (movieId === '') {
      return;
    }

    const fetch = async () => {
      try {
        const { data } = await fetchMoviesDetails(movieId);
        setMovie(data);
      } catch (e) {
        if (e.response.status === 404) {
          return navigate(`/`);
        }
        setError(e.massage);
      }
    };
    fetch();
  }, [movieId, navigate]);

  return <MovieCard movie={movie} />;
}

export default MovieDetails;
