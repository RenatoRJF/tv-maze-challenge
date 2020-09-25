import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Rating average={5.2} amount={3} />);

    expect(getByTestId('rating')).toBeDefined();
  });
});
