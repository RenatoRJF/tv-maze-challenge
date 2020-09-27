import { Show } from '../../types/shows';

export interface ShowsState {
  mostRated: Show[];
  recent: Show[];
  favourites: Show[];
  showsByGenre: Show[];
  searched: Show[];
  selectedGenre: string;
  isSearching: boolean;
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
  recent: [],
  favourites: [],
  showsByGenre: [],
  searched: [],
  selectedGenre: '',
  isSearching: false,
  loading: {
    popular: false,
    recent: false,
    genre: false,
    seach: false,
    favourites: false,
  },
};

export default state;
