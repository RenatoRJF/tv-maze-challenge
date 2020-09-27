import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import Rating from '../Rating';

import './show-card.scss';

interface ShowCardProps {
  /* specifies the image of the show */
  image: string;
  /* specify the rating average */
  average?: number;
  /* Function fired when card is clicked */
  onClick?: () => void;
}

const ShowCard: FC<ShowCardProps> = ({ image, average, onClick }) => (
  <div className="show-card" data-testid="show-card" onClick={onClick}>
    <img src={image} alt="show" />

    <div className="show-card__rating">
      <Rating average={average || 0} />
    </div>
  </div>
);

export default ShowCard;
