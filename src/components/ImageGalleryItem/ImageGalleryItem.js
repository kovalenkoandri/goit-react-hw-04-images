import PropTypes from 'prop-types';
import cssItem from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  setLargeImageURL,
  setTags,
  toggleModal,
  largeImageURL,
  src,
  alt,
}) => {
  const onGalleryItem = (event, largeImageURL, tags) => {
    if (event.target) {
      setLargeImageURL(largeImageURL);
      setTags(tags);
      toggleModal();
    }
  };
  return (
    <>
      <li
        className={cssItem.ImageGalleryItem}
        onClick={event =>
          onGalleryItem(event, largeImageURL, alt)
        }
      >
        <img
          src={src}
          alt={alt}
          className={cssItem['ImageGalleryItem-image']}
        />
      </li>
    </>
  );
};
ImageGalleryItem.propTypes = {
  setLargeImageURL: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
