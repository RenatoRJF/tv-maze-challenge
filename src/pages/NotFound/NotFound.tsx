import React, { FC } from 'react';

import './not-found.scss';

const NotFound: FC = () => (
  <div className="not-found">
    <h1>
      <span>404</span>
      Page not found
    </h1>

    <p>Sorry, this page doesn't exist!</p>
  </div>
);

export default NotFound;
