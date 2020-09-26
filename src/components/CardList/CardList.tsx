import React, { FC } from 'react';

import ArrowLeft from '../../assets/arrow-left.svg';
import ShowCard from '../ShowCard';

import './card-list.scss';

interface Show {
  id: string;
  image: string;
  average: number;
  amount: number;
}

interface CardListProps {
  title?: string;
  items: Show[];
}

const CardList: FC<CardListProps> = ({ title, items }) => (
  <div className="card-list" data-testid="card-list">
    <span className="card-list__title">{title}</span>

    <div className="card-list__arrow">
      <img src={ArrowLeft} alt="arrow left" />
    </div>

    <ul>
      {items.map(({ id, image, average, amount }) => (
        <ShowCard key={id} image={image} average={average} amount={amount} />
      ))}
    </ul>
  </div>
);

export default CardList;
