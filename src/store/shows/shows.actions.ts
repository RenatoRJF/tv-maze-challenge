import { Show } from '../../types/shows';

export enum SHOWS_TYPES {
  LOAD_SHOWS = 'LOAD_SHOWS',
  LOAD_FAVOURITES = 'LOAD_FAVOURITES',
  LOAD_SEARCHED = 'LOAD_SEARCHED',
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
  SET_GENRE = 'SET_GENRE',
  SET_LOADER = 'SET_LOADER',
}

interface loadShows {
  type: typeof SHOWS_TYPES.LOAD_SHOWS;
  payload: Show[];
}

interface loadFavouriteShows {
  type: typeof SHOWS_TYPES.LOAD_FAVOURITES;
  payload: Show[];
}

interface loadSearchedShows {
  type: typeof SHOWS_TYPES.LOAD_SEARCHED;
  payload: Show[];
}

interface setSearchValue {
  type: typeof SHOWS_TYPES.SET_SEARCH_VALUE;
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
  | loadShows
  | loadFavouriteShows
  | loadSearchedShows
  | setSearchValue
  | setGenre
  | setLoader;
