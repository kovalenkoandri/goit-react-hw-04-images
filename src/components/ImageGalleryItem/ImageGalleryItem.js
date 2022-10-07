import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
export class ImageGalleryItem extends Component {
  onGallery = (largeImageURL) => {
    this.props.setLargeImageURL(largeImageURL);
    this.props.toggleModal();
  };
  render() {
    return (
      <>
        {this.props.articles.length > 0 &&
          this.props.articles.map(
            ({ id, tags, webformatURL, largeImageURL }) => (
              <li
                key={id}
                className={css.ImageGalleryItem}
                onClick={() => this.onGallery( largeImageURL)}
              >
                <img
                  src={webformatURL}
                  alt={tags}
                  className={css['ImageGalleryItem-image']}
                />
              </li>
            )
          )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
