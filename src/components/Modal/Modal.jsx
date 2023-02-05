import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CONST } from 'redux/constants';
import { ModalBackdrop, ModalBody, ModalCloseButton, ModalHeader, ModalTitle, ModalWindow } from './Modal.styled';

export function Modal({ title = null, isModalOpen = false, handleClose, children = '' }) {
  const backdropEl = document.getElementById('modal-root');

  const onKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') handleClose();
    },
    [handleClose]
  );

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) handleClose();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isModalOpen, onKeyDown]);

  return createPortal(
    isModalOpen && (
      <ModalBackdrop id="modalBackdrop" onClick={onBackdropClick}>
        <ModalWindow>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalCloseButton onClick={handleClose}>{CONST.icon.clear}</ModalCloseButton>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalWindow>
      </ModalBackdrop>
    ),
    backdropEl
  );
}
