import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Search />);

    expect(getByTestId('search')).toBeDefined();
  });

  it('should render input element', () => {
    const { getByRole } = render(<Search />);

    expect(getByRole('search-input')).toBeDefined();
  });

  it('should fire onSearch function when something is typed', () => {
    const onSearch = jest.fn();
    const { getByRole } = render(<Search onSearch={onSearch} />);

    fireEvent.change(getByRole('search-input'), { target: { value: 'test' } });

    expect(onSearch).toBeDefined();
  });

  it('should fire onClose function when close icon is clicked', () => {
    const onClose = jest.fn();
    const { getByAltText } = render(<Search onClose={onClose} />);

    fireEvent.click(getByAltText('close'));

    expect(onClose).toBeDefined();
  });
});
