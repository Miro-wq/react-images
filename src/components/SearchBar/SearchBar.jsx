// import React, { Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
const handleChange = event => {
    setQuery( event.target.value );
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search term');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchButton}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
