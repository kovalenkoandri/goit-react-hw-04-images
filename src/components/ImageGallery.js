import PropTypes from 'prop-types';
import React, { Component } from 'react';
export class ImageGallery extends Component {
  state = {
    articles: [],
    input: '',
  };
 componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props.articles);
    prevProps.articles !== this.props.articles &&
      this.setState({ articles: this.props.articles });
  }
  render() {
    return (
      <ul className="gallery">
        {this.state.articles.length > 0 &&
          this.state.articles.map(({ id, pageURL, tags }) => (
            <li key={id}>
              <a href={pageURL} target="_blank" rel="noreferrer noopener">
                {tags}
              </a>
            </li>
          ))}
      </ul>
    );
  }
}
/* <!-- Набор <li> с изображениями --> */
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
