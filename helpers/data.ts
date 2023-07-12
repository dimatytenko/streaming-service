import {MediaTypes} from '@/constants/common';
import {ITrendingActors} from '@/types/actors';
import {ICardWithTabs} from '@/types/data';
import {IMovies} from '@/types/movies';
import {ISearchData, ISearchContent} from '@/types/search';
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

export const toGlobalSearchState = (data: ISearchData): ISearchContent[] => {
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
