import React from 'react';
import { createUseStyles } from 'react-jss';

import styles from './ButtonStyles';

const useStyles = createUseStyles(styles);

const Button = ({ label, apiUrl, disabled, handleFetchUsers }) => {
  const classes = useStyles();

  const handleClick = apiUrl => {
    if (!apiUrl) return;
    handleFetchUsers(apiUrl);
  };

  return (
    <button
      className={classes.button}
      disabled={disabled}
      onClick={() => handleClick(apiUrl)}
    >
      {label}
    </button>
  );
};

export default Button;
