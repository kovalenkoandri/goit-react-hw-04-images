import PropTypes from 'prop-types';
export const ImageGallery = articles => {
  console.log(articles);
  return (
    <ul className="gallery">
      {articles.length > 0 &&
        articles.map(({ id, pageURL, tags }) => (
          <li key={id}>
            <a href={pageURL} target="_blank" rel="noreferrer noopener">
              {tags}
            </a>
          </li>
        ))}
    </ul>
  );
};
/* <!-- Набор <li> с изображениями --> */
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
