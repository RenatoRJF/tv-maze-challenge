import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {

  it('should render without crashing', () => {
    const { getByTestId } = render(<Logo />);

    expect(getByTestId('logo')).toBeDefined();
  });
});
