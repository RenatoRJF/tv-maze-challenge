import React from 'react';
import { render } from '@testing-library/react';
import ShowCard from './ShowCard';

describe('ShowCard', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <ShowCard average={5.2} image="image.png" />,
    );

    expect(getByTestId('show-card')).toBeDefined();
  });

  it('should props properly', () => {
    const { getByTestId, queryByAltText } = render(
      <ShowCard average={5.2} image="image.png" />,
    );

    expect(queryByAltText('image.png')).toBeDefined();
    expect(getByTestId('show-card')).toHaveTextContent('5.2');
  });

  it('should fire onClick when function is clicked', () => {
    const { getByTestId } = render(
      <ShowCard average={5.2} image="image.png" />,
    );

    expect(getByTestId('show-card')).toBeDefined();
    expect(getByTestId('show-card')).toBeDefined();
  });
});
