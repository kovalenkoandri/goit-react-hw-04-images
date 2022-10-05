import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export class App extends Component {
  state = {
    articles: [],
    input: '',
    page: 1,
    perPage: 3, //12 by hometask
    isLoading: false,
  };
  httpRequest = async () => {
    try {
      this.setState(prevState => ({
        perPage: prevState.perPage + 3,
        // isLoading: true,
      }));
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
      this.setState(prevState => ({ articles: response.data.hits, isLoading: false }));
    } catch (error) {
      console.log(error);
    }
  };
  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   // timeoutId = setTimeout(await this.httpRequest(), 3000);
  // }
  async componentDidUpdate(prevProps, prevState) {
    prevState.input !== this.state.input && // except cycling
      (await this.httpRequest()); // search btn
  }
  // async componentWillUnmount() {}
  handleSubmit = event => {
    event.preventDefault();
    this.state.input !== event.currentTarget.elements.input.value &&
      this.setState({
        input: event.currentTarget.elements.input.value,
      });
    // event.currentTarget.elements.input.value = '';
  };

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} /><></>
        {isLoading ? <h1>Loading...</h1> : <ImageGallery articles={articles} />}
        {this.state.articles.length > 0 && (
          <Button httpRequest={this.httpRequest} />
        )}
      </>
    );
  }
}
