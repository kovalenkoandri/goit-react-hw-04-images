import PropTypes from 'prop-types';
import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ articles, toggleModal, setLargeImageURL, setTags }) => (
  <>
    <ul className={css.ImageGallery}>
      <ImageGalleryItem
        {...{
          articles,
          toggleModal,
          setLargeImageURL,
          setTags,
        }}
      />
    </ul>
  </>
);

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