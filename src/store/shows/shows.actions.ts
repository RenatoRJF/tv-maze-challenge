import { Show } from '../../types/shows';

export enum SHOWS_TYPES {
  LOAD_POPULAR = 'LOAD_POPULAR',
  LOAD_RECENT = 'LOAD_RECENT',
  LOAD_FAVOURITES = 'LOAD_FAVOURITES',
  LOAD_BY_GENRE = 'LOAD_BY_GENRE',
  LOAD_SEARCHED = 'LOAD_SEARCHED',
  SET_IS_SEACHING = 'SET_IS_SEACHING',
  SET_GENRE = 'SET_GENRE',
  SET_LOADER = 'SET_LOADER',
}

interface loadPopularShows {
  type: typeof SHOWS_TYPES.LOAD_POPULAR;
  payload: Show[];
}

interface loadRecentShows {
  type: typeof SHOWS_TYPES.LOAD_RECENT;
  payload: Show[];
}

interface loadFavouriteShows {
  type: typeof SHOWS_TYPES.LOAD_FAVOURITES;
  payload: Show[];
}

interface loadShowsByGenre {
  type: typeof SHOWS_TYPES.LOAD_BY_GENRE;
  payload: Show[];
}

interface loadSearchedShows {
  type: typeof SHOWS_TYPES.LOAD_SEARCHED;
  payload: Show[];
}

interface setIsSearching {
  type: typeof SHOWS_TYPES.SET_IS_SEACHING;
  payload: boolean;
}

interface setGenre {
  type: typeof SHOWS_TYPES.SET_GENRE;
  payload: boolean;
}

interface setLoader {
  type: typeof SHOWS_TYPES.SET_LOADER;
  payload: {
    name: string;
    status: boolean;
  };
}

export type TasksActionTypes =
  | loadPopularShows
  | loadRecentShows
  | loadFavouriteShows
  | loadShowsByGenre
  | loadSearchedShows
  | setIsSearching
  | setGenre
  | setLoader;
