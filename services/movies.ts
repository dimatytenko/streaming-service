import {API_URL, API_KEY} from '@/constants/api';

export const getTrendingMovies = async (timeFrame: string) => {
  const res = await fetch(`${API_URL}/trending/movie/${timeFrame}?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movies.');

  return res.json();
};

export const getUpcomingMovies = async () => {
  const res = await fetch(`${API_URL}/movie/upcoming/?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movies.');

  return res.json();
};
