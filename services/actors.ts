import {API_KEY, API_URL} from '@/constants/api';
import {ITrendingActorsData, ITrendingActors, IActorMovies, IActorShows, IActorImages} from '@/types/actors';

export const getActors = async (timeFrame: string, page: number): Promise<ITrendingActorsData> => {
  const res = await fetch(`${API_URL}/trending/person/${timeFrame}?page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch actors.');

  return res.json();
};

export const getAllActors = async (page: number): Promise<ITrendingActorsData> => {
  const res = await fetch(`${API_URL}/person/popular?page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch actors.');

  return res.json();
};

export const getBySearch = async (query: string, page: number): Promise<ITrendingActorsData> => {
  const res = await fetch(`${API_URL}/search/person?query=${query}&page=${page}&api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch actors.');

  return res.json();
};

export const getActorById = async (id: string): Promise<ITrendingActors> => {
  const res = await fetch(`${API_URL}/person/${id}?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch actor.');

  return res.json();
};

export const getActorMovies = async (id: string): Promise<IActorMovies> => {
  const res = await fetch(`${API_URL}/person/${id}/movie_credits?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch actor movies.');

  return res.json();
};

export const getActorTvShows = async (id: string): Promise<IActorShows> => {
  const res = await fetch(`${API_URL}/person/${id}/tv_credits?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch actor tv shows.');

  return res.json();
};

export const getActorImages = async (id: string): Promise<IActorImages> => {
  const res = await fetch(`${API_URL}/person/${id}/images?api_key=${API_KEY}`);

  if (!res.ok) throw new Error('Unable to fetch actor images.');

  return res.json();
};
