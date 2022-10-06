import React, { Component } from 'react';
import css from './Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    input: '',
    perPage: 3,
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  onChange = event => {
    this.setState({input: event.currentTarget.value})
  }
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
      </header>
    );
  }
}
