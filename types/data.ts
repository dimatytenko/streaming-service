export interface ITrendingMovies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  vote_average: number;
}

export interface ITrendingActors {
  id: number;
  adult?: boolean;
  name?: string;
  original_name?: string;
  media_type?: string;
  popularity?: number;
  gender?: number;
  known_for_department?: string;
  profile_path?: string;
  known_for?: ITrendingMovies[];
}

export interface ITrendingActorsData {
  page: number;
  results: ITrendingActors[];
  total_pages: number;
  total_results: number;
}
