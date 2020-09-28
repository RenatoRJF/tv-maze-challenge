import { SHOWS_TYPES, TasksActionTypes } from './shows.actions';
import { ShowsState } from './shows.state';

const tasksReducer = (state: ShowsState, action: TasksActionTypes) => {
  switch (action.type) {
    case SHOWS_TYPES.LOAD_SHOWS:
      const all = [...state.allShows, ...action.payload];

      return {
        ...state,
        allShows: all,
        mostRated: [
          ...all.sort((a, b) => b?.rating.average - a?.rating.average),
        ],
        recent: [
          ...all.sort(
            (a, b) => new Date(b.year).getTime() - new Date(a.year).getTime(),
          ),
        ],
      };

    case SHOWS_TYPES.LOAD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, ...action.payload],
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

    case SHOWS_TYPES.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
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
