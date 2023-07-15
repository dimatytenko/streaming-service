import {MediaTypes} from '@/constants/common';

export interface IShows {
  adult?: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: MediaTypes;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  created_by?: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path?: string;
  }[];
  genres?: {
    id: number;
    name: string;
  }[];
  homepage?: string;
  last_air_date?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  production_companies?: {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string;
  type?: string;
}

export interface IShowsData {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IShows[];
  total_pages: number;
  total_results: number;
}
