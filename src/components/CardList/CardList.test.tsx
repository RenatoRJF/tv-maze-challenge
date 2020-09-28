import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CardList from './CardList';

const cards = [
  {
    id: 1,
    image: 'image.png',
    rating: {
      average: 9.5,
    },
    amount: 5,
  },
  {
    id: 2,
    image: 'image.png',
    rating: {
      average: 7,
    },
    amount: 3,
  },
];

describe('CardList', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<CardList items={[]} />);

    expect(getByTestId('card-list')).toBeDefined();
  });

  it('should render list of cards', () => {
    const { getAllByTestId } = render(<CardList items={cards} />);
    const items = getAllByTestId('show-card');

    expect(items).toHaveLength(2);
  });

  it('should render list of cards', () => {
    const { getAllByTestId } = render(<CardList items={cards} />);
    const items = getAllByTestId('show-card');

    expect(items).toHaveLength(2);
  });

  it('should fire onSelect card function', () => {
    const onClick = jest.fn();
    const { getAllByTestId } = render(
      <CardList items={cards} onCardClicked={onClick} />,
    );

    fireEvent.click(getAllByTestId('show-card')[0]);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
