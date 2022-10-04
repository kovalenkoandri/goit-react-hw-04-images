import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component {
  state = {
    articles: [],
  };
  componentDidUpdate(prevProps, prevState) {
    prevProps.articles !== this.props.articles &&
      this.setState({ articles: this.props.articles });
  }
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem articles={this.state.articles} />
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
