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
}

export interface ITrendingActorsData {
  page: number;
  results: ITrendingActors[];
  total_pages: number;
  total_results: number;
}
