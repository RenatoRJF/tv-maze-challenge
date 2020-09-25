import React, { FC } from 'react';

import RatingImage from '../../assets/rating.svg';
import './rating.scss';

interface RatingProps {
  /* specify the rating average */
  average: number;
  /* specify the of votes */
  amount?: number;
}

const Rating: FC<RatingProps> = ({ average, amount }) => (
  <div className="rating" data-testid="rating">
    <div className="rating__stars">
      <img src={RatingImage} alt="rating" />
      <span style={{ width: `${average * 10}%` }} />
    </div>

    <span className="rating__info">
      {average.toFixed(1)} {amount && `(${amount} votes)`}
    </span>
  </div>
);

export default Rating;
