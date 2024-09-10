import React, { Component } from 'react';
import { getImages } from '../PixabayApi';
import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }

fetchImages = async (query, page) => {
  this.setState({ isLoading: true });

  try {
    const images = await getImages(query, page);
    const uniqueNewImages = images.filter(
      newImage => !this.state.images.some(image => image.id === newImage.id)
    );

    this.setState(prevState => ({
      images: [...prevState.images, ...uniqueNewImages],
    }));
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    this.setState({ isLoading: false });
  }
};


  handleSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (largeImageURL = '', tags = '') => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
      tags,
    }));
  };

  render() {
    const { images, isLoading, showModal, largeImageURL, tags } = this.state;
    const shouldShowLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {isLoading && <Loader />}
        {shouldShowLoadMoreButton && <Button onClick={this.loadMoreImages} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
