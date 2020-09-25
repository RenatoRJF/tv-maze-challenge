import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Modal open title="Modal title">Modal content</Modal>);

    expect(getByTestId('modal')).toBeDefined();
  });
});
