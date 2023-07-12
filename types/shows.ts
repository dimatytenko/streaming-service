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
