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
  /* Specifies the title of the list */
  title?: string;
  /* Specifies the items of the list */
  items: ShowCard[];
  /* Function fired when a card is clicked */
  onCardClicked?: (id: number) => void;
  /* Specifies orientation of the list */
  orientation?: 'horizontal' | 'vertical';
}

const CardList: FC<CardListProps> = ({
  title,
  items,
  onCardClicked,
  orientation = 'horizontal',
}) => (
  <div className="card-list" data-testid="card-list">
    <span className="card-list__title">{title}</span>

    <ul data-orientation={orientation}>
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
