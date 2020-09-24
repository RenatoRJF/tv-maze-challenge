import React, { FC } from 'react';

import './header.scss';

const Header: FC = () => (
  <header className="header" data-testid="header">
    <div className="header__dark-section"></div>
  </header>
);

export default Header;
