import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({
  articles,
  setLargeImageURL,
  setTags,
  toggleModal,
  children,
  handleLoadMorePage,
  hasMore,
}) => (
  <>
    {articles.length > 0 && (
      <ul className={css.ImageGallery}>
        {articles.map(({ id, tags, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              setLargeImageURL={setLargeImageURL}
              setTags={setTags}
              toggleModal={toggleModal}
              largeImageURL={largeImageURL}
              src={webformatURL}
              alt={tags}
            >
              {children}
            </ImageGalleryItem>
          );
        })}
      </ul>
    )}
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
