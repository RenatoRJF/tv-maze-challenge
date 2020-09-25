import React, { FC } from 'react';
import Rating from '../Rating';

import './show-card.scss';

interface ShowCardProps {
  /* specifies the image of the show */
  image: string;
  /* specify the rating average */
  average?: number;
  /* specify the amount of votes */
  amount?: number;
}

const ShowCard: FC<ShowCardProps> = ({ image, average, amount }) => (
  <a className="show-card" data-testid="show-card">
    <img src={image} alt="show" />

    <div className="show-card__rating">
      <Rating average={average || 0} amount={amount || 0} />
    </div>
  </a>
);

export default ShowCard;
