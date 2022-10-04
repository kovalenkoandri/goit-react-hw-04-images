import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    articles: [],
    input: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const response = await axios.get(`?q=${this.state.input}`, {
        params: {
          key: '29101880-694af7e9974b3c9bb9fbf3052',
          image_typemit: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: 3,
          page: 1,
        },
      });
      prevState.input !== this.state.input &&
        this.setState({ articles: response.data.hits });
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.state.input !== event.currentTarget.elements.input.value &&
      this.setState({
        input: event.currentTarget.elements.input.value,
      });
    event.currentTarget.elements.input.value = '';
  };

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery articles={this.state.articles} />
      </>
    );
  }
}
