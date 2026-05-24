import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY =
  import.meta.env.VITE_PIXABAY_API_KEY || 'PASTE_YOUR_PIXABAY_API_KEY';

export function getImagesByQuery(query) {
  if (API_KEY === 'PASTE_YOUR_PIXABAY_API_KEY') {
    return Promise.reject(new Error('Pixabay API key is not configured.'));
  }

  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
