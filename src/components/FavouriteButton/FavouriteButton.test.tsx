import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import FavouriteButton from './FavouriteButton';

describe('FavouriteButton', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <FavouriteButton text="Button" isFavourited />,
    );

    expect(getByTestId('favourite-button')).toBeDefined();
  });

  it('should fire onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <FavouriteButton text="Button" isFavourited onClick={onClick} />,
    );

    fireEvent.click(getByTestId('favourite-button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render correct icon when `isFavourited` prop changes', () => {
    const { queryByAltText, rerender } = render(
      <FavouriteButton text="Button" isFavourited={false} />,
    );
    const heartIcon = 'heart.svg';
    const heartShapeIcon = 'heart-shape.svg';

    expect(queryByAltText(heartIcon)).toBeDefined();
    expect(queryByAltText(heartShapeIcon)).toBeNull();

    rerender(<FavouriteButton text="Button" isFavourited />);

    expect(queryByAltText(heartShapeIcon)).toBeDefined();
    expect(queryByAltText(heartIcon)).toBeNull();
  });
});
