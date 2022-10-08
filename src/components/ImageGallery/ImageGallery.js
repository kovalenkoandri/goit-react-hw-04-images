import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { ImageGalleryItem } from 'components/ImageGalleryItem';
import cssItem from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import css from './ImageGallery.module.css';
export class ImageGallery extends Component {
  onGallery = (event, largeImageURL) => {
    event.currentTarget && this.props.setLargeImageURL(largeImageURL);
    this.props.toggleModal();
  };
  render() {
    const { articles } = this.props;
    return (
      <>
        <ul className={css.ImageGallery}>
          {articles.length > 0 &&
            articles.map(({ id, tags, webformatURL, largeImageURL }) => {
              console.log(id);
              return (
                <li
                  key={id.toString()}
                  className={cssItem.ImageGalleryItem}
                  onClick={event => this.onGallery(event, largeImageURL)}
                >
                  <img
                    src={webformatURL}
                    alt={tags}
                    className={cssItem['ImageGalleryItem-image']}
                  />
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
