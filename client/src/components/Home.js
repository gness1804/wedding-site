import React from 'react';
import mdl from '../design/masterDesignLanguage';

const Home = () => {
  return (
    <div className={`card page-component z-depth-1 ${mdl.colors.tertiary}`}>
      <p>I am the home page.</p>
    </div>
  );
};

export default Home;
