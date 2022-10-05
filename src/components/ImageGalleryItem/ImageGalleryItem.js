import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ articles }) => {
  return (
    <>
      {articles.length > 0 &&
        articles.map(({ id, tags, webformatURL }) => (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tags}
              className={css['ImageGalleryItem-image']}
            />
          </li>
        ))}
    </>
  );
};
ImageGalleryItem.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
