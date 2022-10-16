import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
// const dublicateId = [];
// let filtered = [];
// let switcher = true;
export const ImageGallery = ({
  articles,
  setLargeImageURL,
  setTags,
  toggleModal,
  children,
}) => {
  // if (switcher && articles.length > 0) {
  //   filtered = [...articles];
  //   console.log(filtered);
  //   switcher = false;
  // } else if (articles.length > 0) {
  //   filtered = articles.filter((el, idx, ar) => ar.indexOf(el) === idx);
  //   console.log(filtered);
  // }
  const filtered = articles.filter((el, idx, ar) => ar.indexOf(el) === idx);
  return (
    <>
      <ul className={css.ImageGallery}>
        {filtered.length > 0 &&
          filtered.map(el => {
            const { id, tags, webformatURL, largeImageURL } = el;
            // dublicateId.push(el);
            // console.log(dublicateId);
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
    </>
  );
};

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
