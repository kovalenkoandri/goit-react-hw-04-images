import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ articles }) => {
  return (
    <>
      {articles.length > 0 &&
        articles.map(({ id, tags, previewURL }) => (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              src={previewURL}
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
