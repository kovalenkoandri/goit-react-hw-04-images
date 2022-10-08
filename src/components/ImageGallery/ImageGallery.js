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
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
  setLargeImageURL: PropTypes.func.isRequired,
};
