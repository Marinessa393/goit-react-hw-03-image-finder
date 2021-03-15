import React, { Component } from 'react';
import imageApi from './components/Service/Img-API';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: null,
    isLoading: false,
    openModal: false,
    modalImage: null,
    alt: null,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImg();
    }
  }

  onSearch = query => {
    this.setState({ query, images: [], page: 1, error: null });
  };

  fetchImg = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    imageApi
      .fetchImages(query, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          return this.setState({
            error: `Не удалось найти картинку по запросу ${query}`,
          });
        }
        this.setState(({ images, page }) => ({
          images: [...images, ...hits],
          page: page,
        }));
      })
      .catch(error => this.setState({ error: 'Побробуйте снова' }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.scrolling();
  };

  scrolling = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 150,
        behavior: 'smooth',
      });
    }, 1000);
  };

  onOpenModal = e => {
    e.preventDefault();
    this.setState({
      openModal: true,
      modalImage: e.target.dataset.largeimg,
      alt: e.target.alt,
    });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { images, isLoading, openModal, modalImage, alt, error } = this.state;
    const { onSearch, onOpenModal, onLoadMore, closeModal } = this;
    const shouldRenderLoadMoreButton = images.length > 0 && !error;
    return (
      <div className="App">
        <Searchbar onSubmit={onSearch} />
        {!isLoading && <ImageGallery images={images} onClick={onOpenModal} />}
        {isLoading && <Loader />}
        {shouldRenderLoadMoreButton && <Button onClick={onLoadMore} />}
        {openModal && <Modal onClose={closeModal} src={modalImage} alt={alt} />}
        {error && <p className="Error">{error}</p>}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
