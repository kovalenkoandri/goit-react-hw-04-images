import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  
  render() {
    const { articles } = this.props;
    return (
      <>
        <ul className={css.ImageGallery}>
          {articles.length > 0 &&
            articles.map(({ id, tags, webformatURL, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id.toString()}
                  setLargeImageURL={this.props.setLargeImageURL}
                  setTags={this.props.setTags}
                  toggleModal={this.props.toggleModal}
                  largeImageURL={largeImageURL}
                  src={webformatURL}
                  alt={tags}
                >
                  {this.props.children}
                </ImageGalleryItem>
              );
            })}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
  setLargeImageURL: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
};
