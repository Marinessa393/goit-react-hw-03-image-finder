import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ images, onClick }) {
  return images.map(({ webformatURL, largeImageURL }, id) => (
    <li className="ImageGalleryItem" key={id}>
      <img
        className="ImageGalleryItem_image"
        src={webformatURL}
        alt=""
        onClick={() => onClick({ largeImageURL })}
      />
    </li>
  ));
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};
