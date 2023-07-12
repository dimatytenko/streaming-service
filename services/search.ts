import {API_KEY, API_URL} from '@/constants/api';
import {ISearchData} from '@/types/search';

export const searchAllData = async (query: string): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/multi?query=${query}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};
