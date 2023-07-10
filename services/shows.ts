import {API_URL, API_KEY} from '@/constants/api';

export const getTrendingShows = async (timeFrame: string) => {
  const res = await fetch(`${API_URL}/trending/tv/${timeFrame}?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};

export const getAiringTodayShows = async () => {
  const res = await fetch(`${API_URL}/tv/airing_today/?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};
