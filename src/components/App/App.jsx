import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { httpRequest } from 'components/services/api';

export class App extends Component {
  state = {
    articles: [],
    input: '',
    page: 1,
    perPage: 3, //12 by hometask
    loadMorePage: 3,
    isLoading: false,
    largeImageURL: null,
    toggleModal: false,
    tags: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    // except cycling
    if (prevState.perPage !== this.state.perPage) {
      this.setState({
        isLoading: true,
      });
      try {
        const response = await httpRequest(
          this.state.input,
          this.state.perPage,
          this.state.page
        ); // loadMore btn
        this.setState({
          articles: response.data.hits,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
    if (prevState.input !== this.state.input) {
      // except cycling
      this.setState({
        isLoading: true,
        perPage: 3,
      });
      try {
        const response = await httpRequest(
          this.state.input,
          this.state.perPage,
          this.state.page
        ); // search btn
        this.setState({
          articles: response.data.hits,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
    if (prevState.toggleModal !== this.state.toggleModal) {
      // except cycling
      //if modal closed
      !this.state.toggleModal && this.clearLargeImageURL(); // clearLargeImageURL
      !this.state.toggleModal && this.clearTags(); // clearTags
    }
  }

  toggleModal = () =>
    this.setState(prevState => ({ toggleModal: !prevState.toggleModal }));

  setLargeImageURL = image => this.setState({ largeImageURL: image });

  clearLargeImageURL = () => this.setState({ largeImageURL: null });

  setTags = tags => this.setState({ tags });

  clearTags = () => this.setState({ tags: null });

  loadMorePage = () =>
    this.setState(prevState => ({
      perPage: prevState.perPage + prevState.loadMorePage,
    }));

  onSubmit = input => this.setState({ input });

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        {this.state.toggleModal && (
          <Modal toggleModal={this.toggleModal}>
            <img src={this.state.largeImageURL} alt={this.state.tags} />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            {...{
              articles: articles,
              toggleModal: this.toggleModal,
              setLargeImageURL: this.setLargeImageURL,
              setTags: this.setTags,
            }}
          />
        )}
        {this.state.articles.length > 0 && (
          <Button loadMorePage={this.loadMorePage} />
        )}
      </>
    );
  }
}
