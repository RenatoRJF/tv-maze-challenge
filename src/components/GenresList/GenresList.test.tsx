import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GenresList from './GenresList';

const genres = ['Action', 'Documentary'];

describe('GenresList', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<GenresList genres={genres} />);

    expect(getByTestId('genres-list')).toBeDefined();
  });

  it('should specified genres', () => {
    const { getByText } = render(<GenresList genres={genres} />);

    expect(getByText(genres[0])).toBeDefined();
    expect(getByText(genres[1])).toBeDefined();
  });

  it('should fire onClick when genre is selected', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <GenresList genres={genres} onSelect={onClick} />,
    );

    fireEvent.click(getByText(genres[0]));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
