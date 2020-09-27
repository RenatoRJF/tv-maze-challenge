import { SHOWS_TYPES, TasksActionTypes } from './shows.actions';
import { ShowsState } from './shows.state';

const tasksReducer = (state: ShowsState, action: TasksActionTypes) => {
  switch (action.type) {
    case SHOWS_TYPES.LOAD_SHOWS:
      return {
        ...state,
        allShows: [...state.allShows, ...action.payload],
      };

    case SHOWS_TYPES.LOAD_MOST_RATED:
      return {
        ...state,
        mostRated: [...state.mostRated, ...action.payload],
      };

    case SHOWS_TYPES.LOAD_RECENT:
      return {
        ...state,
        recent: [...state.recent, ...action.payload],
      };

    case SHOWS_TYPES.LOAD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, ...action.payload],
      };

    case SHOWS_TYPES.LOAD_BY_GENRE:
      return {
        ...state,
        showsByGenre: action.payload,
      };

    case SHOWS_TYPES.LOAD_SEARCHED:
      return {
        ...state,
        searched: action.payload,
      };

    case SHOWS_TYPES.SET_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      };

    case SHOWS_TYPES.SET_IS_SEACHING:
      return {
        ...state,
        isSearching: action.payload,
      };

    case SHOWS_TYPES.SET_LOADER:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.name]: action.payload.status,
        },
      };

    default:
      return state;
  }
};

export default tasksReducer;
