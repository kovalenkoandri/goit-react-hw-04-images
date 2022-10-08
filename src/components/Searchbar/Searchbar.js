import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.input.trim() === '') {
      toast.error('🦄 At least one symbol required!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(this.state.input);
  };

  onChange = event => {
    this.setState({ input: event.currentTarget.value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <span>Search</span>
          </button>

          <input
            name="input"
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.onChange}
          />
        </form>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </header>
    );
  }
}
