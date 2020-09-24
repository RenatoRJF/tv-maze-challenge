import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Search />);

    expect(getByTestId('search')).toBeDefined();
  });
});
