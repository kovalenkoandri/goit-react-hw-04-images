import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const onEsc = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [toggleModal]);

  const onOverlay = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };
  // createPortal resque from 1. overflow: hidden ancestor components may couse cutted view; 2. modal window require z-index: 1
  return createPortal(
    <div className={css.Overlay} onClick={onOverlay}>
      <div className={css.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};
Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
