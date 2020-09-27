import React, { FC } from 'react';
import { SHOWS_TYPES } from '../../store/shows/shows.actions';
import { useAppState } from '../AppProvider';
import GenresList from '../GenresList';
import Logo from '../Logo';
import Search from '../Search';

import './header.scss';

const genres = [
  'Action',
  'Adult',
  'Adventure',
  'Anime',
  'Children',
  'Comedy',
  'Crime',
  'DIY',
  'Drama',
  'Espionage',
  'Family',
  'Fantasy',
  'Food',
  'History',
  'Horror',
  'Legal',
  'Medical',
  'Music',
  'Mystery',
  'Nature',
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

  const handleSelectGenre = (genre: string): void => {
    dispatch({
      type: SHOWS_TYPES.SET_GENRE,
      payload: showsState.selectedGenre === genre ? '' : genre,
    });
  };

  return (
    <header className="header" data-testid="header">
      <div className="header__dark-section">
        <Logo />
      </div>

      <GenresList
        selected={showsState.selectedGenre}
        genres={genres}
        onSelect={handleSelectGenre}
      />

      <Search />
    </header>
  );
};

export default Header;
