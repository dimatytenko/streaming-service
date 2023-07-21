export interface ICardWithTabs {
  id: number;
  image: string;
  vote: number;
  title: string;
  releaseDate: string;
  popularity: number;
}

export interface IKeywords {
  id: number;
  name: string;
}

export interface ICollections {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
}

export interface ICompanies {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
