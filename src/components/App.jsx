import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    articles: [],
    input: '',
  };
  async componentDidMount() {
    const response = await axios.get(`?q=${this.state.input}`, {
      params: {
        key: '29101880-694af7e9974b3c9bb9fbf3052',
        image_typemit: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 3,
        // page: this.page,
      },
    });
    this.setState({ articles: response.data.hits });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      input: event.currentTarget.elements.input.value,
    });
    console.log(this.state.input);
    console.log(event.currentTarget.elements.input.value);
    event.currentTarget.elements.input.value = '';
  };
  render() {
    const { articles } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="input"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
        <ul>
          {articles.length > 0 &&
            articles.map(({ id, pageURL, tags }) => (
              <li key={id}>
                <a href={pageURL} target="_blank" rel="noreferrer noopener">
                  {tags}
                </a>
              </li>
            ))}
        </ul>
      </header>
    );
  }
}
