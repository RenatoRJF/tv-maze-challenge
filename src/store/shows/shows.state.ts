import { Show } from '../../types/shows';

export interface ShowsState {
  allShows: Show[];
  mostRated: Show[];
  recent: Show[];
  favourites: Show[];
  showsByGenre: Show[];
  searched: Show[];
  selectedGenre: string;
  isSearching: boolean;
  currentPage: number;
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
  showsByGenre: [],
  searched: [],
  selectedGenre: '',
  isSearching: false,
  currentPage: 1,
  loading: {
    popular: false,
    recent: false,
    genre: false,
    seach: false,
    favourites: false,
  },
};

export default state;
