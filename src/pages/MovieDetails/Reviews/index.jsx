import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/movies-api';
import s from './index.module.css'

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await fetchMoviesReviews(movieId);
        setReviews(results);
      } catch (e) {
        setError(e.massage);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {reviews && reviews.length ? (
        reviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li>We don`t have any reviews for this movie</li>
      )}
    </ul>
  );
}

export default Reviews;
