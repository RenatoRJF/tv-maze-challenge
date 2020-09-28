import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Loader />);

    expect(getByTestId('loader')).toBeDefined();
  });
});
