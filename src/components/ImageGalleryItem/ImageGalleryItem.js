import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  tags,
  src,
  dataLargeImg,
  openModal,
}) {
  return (
    <li className="imageGalleryItem">
      <img
        onClick={openModal}
        src={src}
        alt={tags}
        data-largeimg={dataLargeImg}
        className="imageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  dataLargeImg: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};
