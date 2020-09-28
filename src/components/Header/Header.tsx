import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import SearchShowsService from '../../services/SearchShowsService';
import { SHOWS_TYPES } from '../../store/shows/shows.actions';
import formatShowData from '../../utils/formatShowData';
import { useAppState } from '../AppProvider';
import GenresList from '../GenresList';
import Logo from '../Logo';
import Search from '../Search';

import DefaultImage from '../../assets/default.svg';
import './header.scss';

const genres = [
  'Action',
  'Adult',
  'Adventure',
  'Anime',
  'Children',
  'Comedy',
  'Crime',
  'Drama',
  'Family',
  'Fantasy',
  'Food',
  'History',
  'Horror',
  'Legal',
  'Medical',
  'Music',
  'Mystery',
  'Romance',
  'Science-Fiction',
  'Sports',
  'Supernatural',
  'Thriller',
  'Travel',
  'War',
  'Western',
];

const Header: FC = () => {
  const [{ shows: showsState }, dispatch] = useAppState();
  const searchShowsService = new SearchShowsService();
  let inverval: NodeJS.Timeout;

  const handleSelectGenre = (genre: string): void => {
    dispatch({
      type: SHOWS_TYPES.SET_GENRE,
      payload: showsState.selectedGenre === genre ? '' : genre,
    });
  };

  const handleSearch = (value: string) => {
    if (value) {
      debounceSearch(searchShowsService, value, 1000);
    }

    if (showsState.selectedGenre) {
      handleSelectGenre('');
    }
  };

  const debounceSearch = (func: any, value: string, delay: number) => {
    // Cancels the setTimeout method execution
    clearTimeout(inverval);

    // Executes the func after delay time.
    inverval = setTimeout(() => {
      setLoaderState('search', true);

      func.execute(value).then(({ data }: any) => {
        const searchResult = data.map((item: any) =>
          formatShowData({
            ...item.show,
            image: item.show.image || { original: DefaultImage },
          }),
        );

        if (searchResult.length) {
          dispatch({
            type: SHOWS_TYPES.LOAD_SEARCHED,
            payload: searchResult,
          });
        }

        setLoaderState('search', false);
      });
    }, delay);
  };

  const setLoaderState = (name: string, status: boolean) => {
    dispatch({
      type: SHOWS_TYPES.SET_LOADER,
      payload: { name, status },
    });
  };

  return (
    <header className="header" data-testid="header">
      <div className="header__dark-section">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <GenresList
        selected={showsState.selectedGenre}
        genres={genres}
        onSelect={handleSelectGenre}
      />

      <Search
        onSearch={handleSearch}
        onClose={() => {
          dispatch({
            type: SHOWS_TYPES.LOAD_SEARCHED,
            payload: [],
          });
        }}
      />
    </header>
  );
};

export default Header;
