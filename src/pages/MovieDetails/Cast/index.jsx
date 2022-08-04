import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/movies-api';
import { URL_IMG } from 'services/movies-api';
import s from './index.module.css';

function Cast() {
  const { movieId } = useParams();
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { cast },
        } = await fetchMoviesCredits(movieId);
        setAuthors(cast);
      } catch (e) {
        setError(e.massage);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {authors &&
        authors.map(({ id, profile_path, name, cast_id }) => (
          <li key={id + cast_id} className={s.item} >
            <img src={URL_IMG + profile_path} alt={name} className={s.img} />
            <p className={s.text}>{name}</p>
          </li>
        ))}
    </ul>
  );
}

export default Cast;
