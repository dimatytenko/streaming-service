export enum TimeFrame {
  DAY = 'day',
  WEEK = 'week',
}

export enum ActorsPaths {
  ACTORS = '/actors',
  TODAY = '/actors/today',
  WEEK = '/actors/week',
  SEARCH = '/actors/search',
}

export enum CardVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export const searchNavItems = ['Movies', 'TV Shows', 'People', 'Keywords', 'Collections', 'Companies'];

export enum MediaTypes {
  MOVIE = 'movie',
  PERSON = 'person',
  TV = 'tv',
}

export enum ShowPaths {
  SHOWS = '/tv',
  TODAY = '/tv/today',
  WEEK = '/tv/week',
  TOP_RATED = '/tv/top-rated',
  ON_THE_AIR = '/tv/on-the-air',
  AIRING_TODAY = '/tv/airing-today',
}
