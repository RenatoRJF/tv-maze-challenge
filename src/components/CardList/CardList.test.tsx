import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<CardList items={[]} />);

    expect(getByTestId('card-list')).toBeDefined();
  });
});
