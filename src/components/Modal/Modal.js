import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    loading: false,
  };

  toggleLoadind() {
    this.setState(prevState => {
      return { loading: !prevState.loading };
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    window.addEventListener('keydown', this.handleOnClose);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleOnClose);
  }

  handleOnClose = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.onClose();
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { src, alt } = this.props;
    const { handleBackdropClick, handleImageLoaded } = this;
    return createPortal(
      <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal" onLoad={handleImageLoaded}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
