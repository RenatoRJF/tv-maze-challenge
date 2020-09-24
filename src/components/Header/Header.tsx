import React, { FC } from 'react';
import GenresList from '../GenresList';
import Logo from '../Logo';
import Search from '../Search';

import './header.scss';

const Header: FC = () => {
  const genres = ['Action', 'Romance', 'Horror', 'Anime'];

  return (
    <header className="header" data-testid="header">
      <div className="header__dark-section">
        <Logo />
      </div>

      <GenresList genres={genres} />

      <Search />
    </header>
  );
};

export default Header;
