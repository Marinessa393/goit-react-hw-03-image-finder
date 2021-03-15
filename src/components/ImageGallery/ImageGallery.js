import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className="imageGallery">
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            src={webformatURL}
            dataLargeImg={largeImageURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      bigImgURL: PropTypes.string.isRequired,
      webURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};
