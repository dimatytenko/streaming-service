import {MediaTypes, SearchTypes} from '@/constants/common';
import {ITrendingActors} from './actors';
import {IKeywords, ICollections, ICompanies} from './data';
import {IMovies} from './movies';
import {IShows} from './shows';

export interface ISearchData<T = SearchResType> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

export type GlobalSearchResType = ITrendingActors[] | IMovies[] | IShows[];
export type SpecificSearchResType = IKeywords[] | ICollections[] | ICompanies[];
export type SearchResType = GlobalSearchResType & SpecificSearchResType;

export interface ISearchContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  type: MediaTypes | SearchTypes;
}
