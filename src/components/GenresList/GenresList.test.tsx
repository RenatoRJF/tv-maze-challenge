import React from 'react';
import { render } from '@testing-library/react';
import GenresList from './GenresList';

describe('GenresList', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <GenresList genres={['Action', 'Documentary']} />,
    );

    expect(getByTestId('genres-list')).toBeDefined();
  });
});
