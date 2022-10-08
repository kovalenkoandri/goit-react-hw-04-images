import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const httpRequest = (input, per_page, page) =>
  axios.get(`?q=${input}`, {
    params: {
      key: '29101880-694af7e9974b3c9bb9fbf3052',
      image_typemit: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page,
      page,
    },
  });
