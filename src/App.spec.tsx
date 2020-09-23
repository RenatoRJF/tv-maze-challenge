import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
  test('Simple', () => {
    const { getByText } = render(<App />)

    expect(getByText('Initial setup')).toBeInTheDocument()
  })
});
