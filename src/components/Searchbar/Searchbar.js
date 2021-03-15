import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handleQueryChange = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleQuerySubmit = event => {
    event.preventDefault();
    const { query } = this.state;

    if (query.trim() === '') {
      return toast.error('введите запрос');
    }

    this.props.onSubmit(query);

    this.setState({ query: '' });
  };

  render() {
    const { handleQuerySubmit, handleQueryChange } = this;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleQuerySubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            value={this.state.query}
            autoFocus
            placeholder="Search images and photos"
            onChange={handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
