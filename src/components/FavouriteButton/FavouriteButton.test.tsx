import React from 'react';
import { render } from '@testing-library/react';
import FavouriteButton from './FavouriteButton';

describe('FavouriteButton', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <FavouriteButton text="Button" isFavourited />,
    );

    expect(getByTestId('favourite-button')).toBeDefined();
  });
});
