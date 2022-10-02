<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>;
import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
class AxiosGetApiService {
    gallery = document.querySelector('.gallery');
    constructor() {
        this.page = 1;
        this.inputValue = '';
    }
    async axiosGet() {
        return await axios.get(`?q=${this.inputValue}`, {
            params: {
                key: '29101880-694af7e9974b3c9bb9fbf3052',
                image_typemit: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 30,
                page: this.page,
            },
        });
    }
}