import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import React from 'react';
import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <>
      <li key={id} className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={css['ImageGalleryItem-image']}
        />
      </li>
    </>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: urlPropType.isRequired,
  tags: PropTypes.string.isRequired,
};
