import PropTypes from 'prop-types';
const API_KEY = '19822472-14ec0e3f9ba277805ee5b06f8';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(query, page) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По запросу ${query} ничего не найдено`));
  });
}

const imageApi = { fetchImages };
fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
export default imageApi;
