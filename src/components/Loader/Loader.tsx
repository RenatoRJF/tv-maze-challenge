import React, { FC } from 'react';

import LoaderCircle from '../../assets/loader-circle.svg';
import TVIcon from '../../assets/tv.svg';

import './loader.scss';

const Loader: FC = () => (
  <div className="loader" data-testid="loader">
    <img className="circle" src={LoaderCircle} alt="loader circle" />
    <img className="tv" src={TVIcon} alt="tv" />
  </div>
);

export default Loader;
