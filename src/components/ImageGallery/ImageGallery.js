import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
// import { Modal } from 'components/Modal';
import css from './ImageGallery.module.css';
export class ImageGallery extends Component {
 
  render() {
    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem
          articles={this.props.articles}
          toggleModal={this.props.toggleModal}
          setLargeImageURL={this.props.setLargeImageURL}
          clearLargeImageURL={this.props.clearLargeImageURL}
        />
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
