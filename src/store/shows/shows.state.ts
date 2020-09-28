import { Show } from '../../types/shows';

export interface ShowsState {
  allShows: Show[];
  mostRated: Show[];
  recent: Show[];
  favourites: Show[];
  searched: Show[];
  selectedGenre: string;
  searchValue: string;
  loading: {
    popular: boolean;
    recent: boolean;
    genre: boolean;
    seach: boolean;
    favourites: boolean;
  };
}

const state: ShowsState = {
  mostRated: [],
  allShows: [],
  recent: [],
  favourites: [],
  searched: [],
  selectedGenre: '',
  searchValue: '',
  loading: {
    popular: false,
    recent: false,
    genre: false,
    seach: false,
    favourites: false,
  },
};

export default state;
