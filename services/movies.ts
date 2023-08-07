import {API_URL, API_KEY} from '@/constants/api';
import {IMoviesData, IMovies} from '@/types/movies';

export const getTrendingMovies = async (timeFrame: string, page?: number): Promise<IMoviesData> => {
  const res = await fetch(`${API_URL}/trending/movie/${timeFrame}?page=${page || 1}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movies.');

  return res.json();
};

export const getUpcomingMovies = async (): Promise<IMoviesData> => {
  const res = await fetch(`${API_URL}/movie/upcoming/?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movies.');

  return res.json();
};

export const getPopularMovies = async (page?: number): Promise<IMoviesData> => {
  const res = await fetch(`${API_URL}/movie/popular?page=${page || 1}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movies.');

  return res.json();
};

export const getMovieDetails = async (id: string): Promise<IMovies> => {
  const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch Movie details.');

  return res.json();
};
