import PropTypes from 'prop-types';
import React, { Component } from 'react';
export class ImageGallery extends Component {
  state = {
    articles: [],
    input: '',
  };
 componentDidUpdate(prevProps, prevState) {
    prevProps.articles !== this.props.articles &&
      this.setState({ articles: this.props.articles });
  }
  render() {
    console.log(this.state.articles);
    return (
      <ul className="gallery" style={{ display: 'block' }}>
        {this.state.articles.length > 0 &&
          this.state.articles.map(({ id, pageURL, tags, previewURL }) => (
            <li key={id}>
              <a
                href={pageURL}
                target="_blank"
                rel="noreferrer noopener"
                style={{ display: 'block' }}
              >
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
