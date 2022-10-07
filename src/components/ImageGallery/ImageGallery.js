import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
export class ImageGallery extends Component {
  onGallery = (event, largeImageURL) => {
    event.target && this.props.setLargeImageURL(largeImageURL);
    this.props.toggleModal();
  };
  render() {
    const { articles } = this.props;
    return (
      <>
        {articles.length > 0 &&
          articles.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ul
              className={css.ImageGallery}
              onClick={event => this.onGallery(event, largeImageURL)}
            >
              <ImageGalleryItem
                id={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            </ul>
          ))}
      </>
    );
  }
}
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
