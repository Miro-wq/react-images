import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'title',
      captionDelay: 250,
    });

    return () => {

      lightbox.destroy();
    };
  }, [images]);

  return (
    <ul className="gallery"> {/* //nu vrea sa functioneze altfel, nici cu gallery, nici fara gallery, incalc nu stiu ce regula */}
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id} className={styles.galleryItem}>
          <a href={largeImageURL} title={tags}>
            <img src={webformatURL} alt={tags} className={styles.galleryImage} />
          </a>
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
