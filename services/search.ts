import {API_KEY, API_URL} from '@/constants/api';
import {ISearchData} from '@/types/search';

export const searchAllData = async (query: string, page: number): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/multi?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch search data.');

  return res.json();
};

export const searchDataByCollection = async (query: string, page: number): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/collection?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch collections data.');

  return res.json();
};

export const searchDataByCompany = async (query: string, page: number): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/company?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch company data.');

  return res.json();
};

export const searchDataByKeyword = async (query: string, page: number): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/keyword?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch keyword data.');

  return res.json();
};

export const searchDataByMovie = async (query: string, page: number): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch movie data.');

  return res.json();
};

export const searchDataByPerson = async (query: string, page: number): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/person?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch person data.');

  return res.json();
};

export const searchDataByShows = async (query: string, page: number): Promise<ISearchData> => {
  const res = await fetch(`${API_URL}/search/tv?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch TV shows.');

  return res.json();
};
