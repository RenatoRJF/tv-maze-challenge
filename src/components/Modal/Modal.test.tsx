import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from './Modal';

const modalContent = 'Modal Content';

describe('Modal', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(
      <Modal open title="Modal title">
        {modalContent}
      </Modal>,
    );

    expect(getByTestId('modal')).toBeDefined();
  });

  it('should children content', () => {
    const { getByTestId } = render(
      <Modal open title="Modal title">
        {modalContent}
      </Modal>,
    );

    expect(getByTestId('modal')).toHaveTextContent(modalContent);
  });

  it('should fire onClose function whne close icon is clicked', () => {
    const onClose = jest.fn();
    const { queryByAltText } = render(
      <Modal open title="Modal title" onClose={onClose}>
        {modalContent}
      </Modal>,
    );
    const closeIcon = queryByAltText('close') as HTMLImageElement;

    fireEvent.click(closeIcon);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should render props properly', () => {
    const title = 'Modal title';
    const { queryByTestId, rerender } = render(
      <Modal title={title}>{modalContent}</Modal>,
    );

    expect(queryByTestId('modal')).toBeNull();

    rerender(
      <Modal open title="Modal title">
        {modalContent}
      </Modal>,
    );

    expect(queryByTestId('modal')).toBeDefined();
    expect(queryByTestId('modal')).toHaveTextContent(title);
  });
});
