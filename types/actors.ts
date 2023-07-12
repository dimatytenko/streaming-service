import {MediaTypes} from '@/constants/common';
import {IMovies} from './movies';
import {IShows} from './shows';

export interface ITrendingActors {
  id: number;
  adult: boolean;
  name: string;
  original_name: string;
  media_type: MediaTypes;
  popularity: number;
  gender: number;
  known_for_department: string;
  known_for: IMovies[];
  profile_path: string;
}

export interface ITrendingActorsData {
  page: number;
  results: ITrendingActors[];
  total_pages: number;
  total_results: number;
}

export interface IImage {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IActorImages {
  id: number;
  profiles: IImage[];
}

export interface IActorShows {
  cast: IShows[];
  crew: IShows[];
  id: number;
}

export interface IActorMovies {
  cast: IMovies[];
  crew: IMovies[];
  id: number;
}
