import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }
  onEsc = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  onOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };
  render() {
    // createPortal resque from 1. overflow: hidden ancestor components may couse cutted view; 2. modal window require z-index: 1
    return createPortal(
      <div className={css.Overlay} onClick={this.onOverlay}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
modalRoot.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
