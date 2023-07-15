import {API_URL, API_KEY} from '@/constants/api';
import {IShows, IShowsData} from '@/types/shows';

export const getPopularShows = async (page?: number): Promise<IShowsData> => {
  const res = await fetch(`${API_URL}/tv/popular?page=${page || 1}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};
export const getTrendingShows = async (timeFrame: string, page?: number): Promise<IShowsData> => {
  const res = await fetch(`${API_URL}/trending/tv/${timeFrame}?page=${page || 1}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};

export const getAiringTodayShows = async (page?: number): Promise<IShowsData> => {
  const res = await fetch(`${API_URL}/tv/airing_today/?page=${page || 1}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};

export const getTopRatedShows = async (page?: number): Promise<IShowsData> => {
  const res = await fetch(`${API_URL}/tv/top_rated/?page=${page || 1}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};

export const getOnTheAirShows = async (page?: number): Promise<IShowsData> => {
  const res = await fetch(`${API_URL}/tv/on_the_air/?page=${page || 1}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};

export const getShowDetails = async (id: string): Promise<IShows> => {
  const res = await fetch(`${API_URL}/tv/${id}?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV show details.');

  return res.json();
};
