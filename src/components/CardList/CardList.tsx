import React, { FC } from 'react';

import ArrowLeft from '../../assets/arrow-left.svg';
import ShowCard from '../ShowCard';

import './card-list.scss';

interface Show {
  id: number;
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

    <ul>
      {items.map(({ id, image, average }) => (
        <ShowCard key={id} image={image} average={average} id={id} />
      ))}
    </ul>
  </div>
);

export default CardList;
