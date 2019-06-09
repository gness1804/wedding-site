/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import mdl from '../design/masterDesignLanguage';
/* eslint-enable no-unused-vars */

// TODO: replace hardcoded values
const NotFound = () => {
  return (
    <div
      className={`card page-component not-found z-depth-1 ${
        mdl.colors.primary
      }`}
    >
      <h1>Sorry, this page does not exist. Please try again.</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
