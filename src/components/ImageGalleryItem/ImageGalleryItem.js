import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cssItem from './ImageGalleryItem.module.css';
export class ImageGalleryItem extends Component {
  onGalleryItem = (event, largeImageURL, tags) => {
    if (event.target) {
      this.props.setLargeImageURL(largeImageURL);
      this.props.setTags(tags);
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <>
        <li
          className={cssItem.ImageGalleryItem}
          onClick={event => this.onGalleryItem(event, this.props.largeImageURL, this.props.alt)}
        >
          <img
            src={this.props.src}
            alt={this.props.alt}
            className={cssItem['ImageGalleryItem-image']}
          />
        </li>
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  setLargeImageURL: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
