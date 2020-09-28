import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Rating average={5.2} />);

    expect(getByTestId('rating')).toBeDefined();
  });

  it('should render average prop', () => {
    const { getByTestId } = render(<Rating average={5.2} />);

    expect(getByTestId('rating')).toHaveTextContent('5.2');
  });
});
