import React, { FC, ReactNode } from 'react';
import closeIcon from '../../assets/close.svg';
import './modal.scss';

interface ModalProps {
  /* Specifies the content of the modal */
  children: ReactNode;
  /* If it is true, the modal is shown */
  open?: boolean;
  /* Function fired when close buttton/ESC is clicked */
  onClose?: () => void;
  /* Defines the title of the modal */
  title: string;
}

const Modal: FC<ModalProps> = ({ title, children, open = false, onClose }) => (
  open ? (
    <div className="modal" data-testid="modal">
      <div className="modal__content">
        <header className="modal__header">
          <h3>{title}</h3>
          <img src={closeIcon} alt="close" onClick={onClose} />
        </header>

        {children}
      </div>
    </div>
  ): null
)

export default Modal;
