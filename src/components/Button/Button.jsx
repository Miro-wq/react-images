import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <div className={styles.buttonContainer}>
  <button type="button" className={styles.loadMore} onClick={onClick}>
    Load more
  </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
