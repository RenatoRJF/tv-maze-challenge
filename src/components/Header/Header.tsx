import React, { FC } from 'react';
import Logo from '../Logo';
import Search from '../Search';

import './header.scss';

const Header: FC = () => (
  <header className="header" data-testid="header">
    <div className="header__dark-section">
      <Logo />
    </div>

    <Search />
  </header>
);

export default Header;
