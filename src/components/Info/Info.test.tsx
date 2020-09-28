import React from 'react';
import { render } from '@testing-library/react';
import Info from './Info';

describe('Info', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Info label="Genre" value="Action, Food" />);

    expect(getByTestId('info')).toBeDefined();
  });
});
