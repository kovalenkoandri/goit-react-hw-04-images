import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
export class ImageGallery extends Component {
  state = {
    articles: [],
  };
  componentDidUpdate(prevProps, prevState) {
    // console.log(`prevProps.articles ${prevProps.articles.length}`);
    // console.log(`this.props.articles ${this.props.articles.length}`);
    prevProps.articles !== this.props.articles &&
      this.setState({ articles: this.props.articles });
  }
  render() {
    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem articles={this.state.articles} />
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
