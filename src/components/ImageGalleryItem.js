import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ articles }) => {
  return (
    <>
      {articles.length > 0 &&
        articles.map(({ id, tags, previewURL }) => (
          <li key={id} className="gallery-item">
            <img
              src={previewURL}
              alt={tags}
              style={{
                margin: 8,
                padding: '12px 16px',
                borderRadius: 4,
                backgroundColor: 'gray',
                color: 'white',
                display: 'block',
                width: '100px',
                height: '100px',
              }}
            />
          </li>
        ))}
    </>
  );
};
ImageGalleryItem.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
