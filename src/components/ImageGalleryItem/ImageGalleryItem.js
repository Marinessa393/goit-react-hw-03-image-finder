import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ images, onClick }) {
  return images.map(({ id, webformatURL }) => (
    <li className="ImageGalleryItem" key={id} onClick={() => onClick(id)}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
    </li>
  ));
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};
