import {MediaTypes} from '@/constants/common';
import {ITrendingActors} from './actors';
import {IMovies} from './movies';
import {IShows} from './shows';

export interface ISearchData {
  page: number;
  results: ITrendingActors[] | IMovies[] | IShows[];
  total_pages: number;
  total_results: number;
}

export interface ISearchContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  type: MediaTypes;
}
