import React, { FC } from 'react';

import ShowCard from '../ShowCard';

import './card-list.scss';

interface ShowCard {
  id: number;
  image: string;
  rating: {
    average: number;
  };
  amount: number;
}

interface CardListProps {
  title?: string;
  items: ShowCard[];
  onCardClicked?: (id: number) => void;
}

const CardList: FC<CardListProps> = ({ title, items, onCardClicked }) => (
  <div className="card-list" data-testid="card-list">
    <span className="card-list__title">{title}</span>

    <ul>
      {items.map(({ id, image, rating }) => (
        <ShowCard
          key={id}
          image={image}
          average={rating.average}
          onClick={() => {
            if (onCardClicked) {
              onCardClicked(id);
            }
          }}
        />
      ))}
    </ul>
  </div>
);

export default CardList;
