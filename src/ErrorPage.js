import React from 'react';
import { useRouteError } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import styles from './ErrorPageStyles.js';

const useStyles = createUseStyles(styles);

export default function ErrorPage() {
  const classes = useStyles();
  const error = useRouteError();

  return (
    <div id="error-page" className={classes.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.status}</i>
      </p>
    </div>
  );
}
