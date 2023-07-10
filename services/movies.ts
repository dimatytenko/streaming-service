import {API_URL, API_KEY} from '@/constants/api';
import {IMoviesData} from '@/types/movies';

export const getTrendingMovies = async (timeFrame: string): Promise<IMoviesData> => {
  const res = await fetch(`${API_URL}/trending/movie/${timeFrame}?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movies.');

  return res.json();
};

export const getUpcomingMovies = async (): Promise<IMoviesData> => {
  const res = await fetch(`${API_URL}/movie/upcoming/?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movies.');

  return res.json();
};
