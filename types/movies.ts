import {MediaTypes} from '@/constants/common';

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaTypes;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
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
  budget?: number;
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
  imdb_id?: string;
}

export interface IMoviesData {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}
