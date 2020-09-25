import React from 'react';
import { render } from '@testing-library/react';
import ShowCard from './ShowCard';

describe('ShowCard', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <ShowCard average={5.2} amount={3} image="" />,
    );

    expect(getByTestId('show-card')).toBeDefined();
  });
});
