import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Rating from '../Rating';

import './show-card.scss';

interface ShowCardProps {
  /* specifies the id of the show */
  id?: number;
  /* specifies the image of the show */
  image: string;
  /* specify the rating average */
  average?: number;
}

const ShowCard: FC<ShowCardProps> = ({ image, average, id }) => (
  <Link className="show-card" data-testid="show-card" to={`/shows/${id}`}>
    <img src={image} alt="show" />

    <div className="show-card__rating">
      <Rating average={average || 0} />
    </div>
  </Link>
);

export default ShowCard;
