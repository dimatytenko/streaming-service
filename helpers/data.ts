import {MediaTypes, SearchTypes} from '@/constants/common';
import {ITrendingActors} from '@/types/actors';
import {ICardWithTabs, ICollections, ICompanies, IKeywords} from '@/types/data';
import {IMovies} from '@/types/movies';
import {ISearchData, ISearchContent, GlobalSearchResType, SpecificSearchResType} from '@/types/search';
import {IShows} from '@/types/shows';

export const toCardStateMovies = (data: IMovies[]): ICardWithTabs[] => {
  return data.map((d) => ({
    id: d.id,
    image: d.poster_path,
    vote: d.vote_average,
    title: d.title,
    releaseDate: d.release_date,
    popularity: d.popularity,
  }));
};

export const toCardStateShows = (data: IShows[]): ICardWithTabs[] => {
  return data.map((d) => ({
    id: d.id,
    image: d.poster_path,
    vote: d.vote_average,
    title: d.name,
    releaseDate: d.first_air_date,
    popularity: d.popularity,
  }));
};

export const toGlobalSearchState = (data: ISearchData<GlobalSearchResType>): ISearchContent[] => {
  return data.results.map((d) => ({
    id: d.id,
    title:
      d.media_type === MediaTypes.MOVIE ? (d as IMovies).original_title : (d as ITrendingActors | IShows).original_name,
    subtitle:
      d.media_type === MediaTypes.MOVIE
        ? (d as IMovies).release_date
        : d.media_type === MediaTypes.TV
        ? (d as IShows).first_air_date
        : (d as ITrendingActors).known_for_department,
    description:
      d.media_type === MediaTypes.MOVIE || d.media_type === MediaTypes.TV
        ? (d as IMovies | IShows).overview
        : (d as ITrendingActors).known_for
            .map((el: IMovies | IShows) => (el as IMovies).original_title || (el as IShows).original_name)
            .join(', '),
    image:
      d.media_type === MediaTypes.MOVIE || d.media_type === MediaTypes.TV
        ? (d as IMovies | IShows).poster_path
        : (d as ITrendingActors).profile_path,
    type: d.media_type,
  }));
};

export const toSearchStateMovies = (data: ISearchData<GlobalSearchResType>): ISearchContent[] => {
  return data.results.map((d) => ({
    id: d.id,
    title: (d as IMovies).original_title,
    subtitle: (d as IMovies).release_date,
    description: (d as IMovies).overview,
    image: (d as IMovies).poster_path,
    type: MediaTypes.MOVIE,
  }));
};

export const toSearchStateShows = (data: ISearchData<GlobalSearchResType>): ISearchContent[] => {
  return data.results.map((d) => ({
    id: d.id,
    title: (d as IShows).original_name,
    subtitle: (d as IShows).first_air_date,
    description: (d as IShows).overview,
    image: (d as IShows).poster_path,
    type: MediaTypes.TV,
  }));
};

export const toSearchStatePeople = (data: ISearchData<GlobalSearchResType>): ISearchContent[] => {
  return data.results.map((d) => ({
    id: d.id,
    title: (d as ITrendingActors).original_name,
    subtitle: (d as ITrendingActors).known_for_department,
    description: (d as ITrendingActors).known_for
      .map((el: IMovies | IShows) => (el as IMovies).original_title || (el as IShows).original_name)
      .join(', '),
    image: (d as ITrendingActors).profile_path,
    type: MediaTypes.PERSON,
  }));
};

export const toSearchStateKeywords = (data: ISearchData<SpecificSearchResType>): ISearchContent[] => {
  return data.results.map((d) => ({
    id: d.id,
    title: d.name,
    subtitle: '',
    description: '',
    image: '',
    type: SearchTypes.KEYWORDS,
  }));
};

export const toSearchStateCollections = (data: ISearchData<SpecificSearchResType>): ISearchContent[] => {
  return data.results.map((d) => ({
    id: d.id,
    title: d.name,
    subtitle: '',
    description: (d as ICollections).overview,
    image: (d as ICollections).poster_path,
    type: SearchTypes.COLLECTIONS,
  }));
};

export const toSearchStateCompanies = (data: ISearchData<SpecificSearchResType>): ISearchContent[] => {
  return data.results.map((d) => ({
    id: d.id,
    title: d.name,
    subtitle: '',
    description: (d as ICompanies).origin_country ? `Origin country: ${(d as ICompanies).origin_country}` : '',
    image: (d as ICompanies).logo_path || '',
    type: SearchTypes.COMPANIES,
  }));
};
