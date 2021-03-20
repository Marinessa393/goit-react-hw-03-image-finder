import React, { Component } from 'react';
import { fetchImages } from './Service/Img-API';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Spinner from './components/Loader';
import Modal from './components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    largeImage: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) this.onFetchImages();
  }

  onSearchImages = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
    });
  };

  onFetchImages = () => {
    this.setState({ isLoading: true });

    fetchImages(this.state.searchQuery, this.state.currentPage)
      .then(fetchedImages => {
        console.log(fetchedImages);
        if (fetchedImages.length === 0) {
          return this.setState({
            error: 'Oops, I can`t find any images...',
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages],
          currentPage: prevState.currentPage + 1,
          error: null,
        }));
        this.scrolling();
      })
      .catch(error => this.setState({ error: 'Try Again' }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openImage = images => {
    this.setState({ largeImage: images.largeImageURL });
    console.log(this.state.largeImage);
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { onSearchImages, openImage, onFetchImages, toggleModal } = this;
    const { isLoading, showModal, largeImage, images, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={onSearchImages} />
        <ImageGallery>
          <ImageGalleryItem images={images} onClick={openImage} />
        </ImageGallery>

        {shouldRenderLoadMoreButton && <Button onClick={onFetchImages} />}

        {isLoading && <Spinner />}

        {showModal && <Modal onClose={toggleModal} src={largeImage}></Modal>}
        {error && <p className="Error">{error}</p>}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

export default App;
