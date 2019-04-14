import React from 'react';
import { Link } from 'react-router-dom';

// TODO: replace hardcoded values
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry, this page does not exist. Please try again.</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
