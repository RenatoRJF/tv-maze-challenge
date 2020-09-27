import React, { FC, useEffect, useRef } from 'react';

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
  /* Finction fired when scroll ends */
  onScrollEnd?: () => void;
}

const CardList: FC<CardListProps> = ({
  title,
  items,
  onCardClicked,
  orientation = 'horizontal',
  onScrollEnd,
}) => {
  const listRef = useRef<any>();

  useEffect(() => {
    const elem = listRef.current;

    const onScroll = function () {
      if (elem.offsetWidth + elem.scrollLeft >= elem.scrollWidth) {
        if (onScrollEnd) {
          onScrollEnd();
        }
      }
    };

    elem.addEventListener('scroll', onScroll);

    return () => {
      elem.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="card-list" data-testid="card-list">
      <span className="card-list__title">{title}</span>

      <ul data-orientation={orientation} ref={listRef}>
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
};

export default CardList;
