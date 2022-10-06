import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
export class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem articles={this.props.articles} />
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
