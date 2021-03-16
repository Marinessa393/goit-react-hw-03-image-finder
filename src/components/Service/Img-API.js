import axios from 'axios';
const API_KEY = '19822472-14ec0e3f9ba277805ee5b06f8';

export function fetchImages(searchQuery, currentPage) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
}
