import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export class App extends Component {
  state = {
    articles: [],
    input: '',
    page: 1,
    perPage: 3,
  };
  httpRequest = async () => {
    try {
      this.setState(prevState => ({ page: prevState.page + 1, perPage: prevState.perPage + 3  }));
      const response = await axios.get(`?q=${this.state.input}`, {
        params: {
          key: '29101880-694af7e9974b3c9bb9fbf3052',
          image_typemit: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: this.state.perPage,
          page: this.state.page,
        },
      });
      this.setState({ articles: response.data.hits });
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidUpdate(prevProps, prevState) {
    
    prevState.input !== this.state.input && // except cycling
   await this.httpRequest(); // search btn
  }

  handleSubmit = event => {
    event.preventDefault();
    this.state.input !== event.currentTarget.elements.input.value &&
      this.setState({
        input: event.currentTarget.elements.input.value,
      });
    // event.currentTarget.elements.input.value = '';
  };

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery articles={this.state.articles} />
        <Button httpRequest={this.httpRequest} />   
      </>
    );
  }
}
