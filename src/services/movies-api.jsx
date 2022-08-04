import axios from 'axios';

const KEY = '8fd285b28729aefcde4e390a1564f416';
const BASE_URL = 'https://api.themoviedb.org/3';
export const URL_IMG = 'https://image.tmdb.org/t/p/w500';

export const fetchTrending = async () => {
  return await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
};

export const fetchMoviesDetails = async id => {
  return await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
};

export const fetchMoviesCredits = async id => {
  return await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
};

export const fetchMoviesReviews = async id => {
  return await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
};

export const fetchSearchMovie = async query => {
  return await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};
