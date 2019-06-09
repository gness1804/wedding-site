/* eslint-disable no-unused-vars */
import React from 'react';
import mdl from '../../design/masterDesignLanguage';
import './styles.css';
/* eslint-enable no-unused-vars */

/**
 *
 * @param {Object} param0 - the props
 * @param {string} param0.src - the source
 * @param {string} param0.altText - the alt text
 * @param {string} [param0.styleClass] - optional class for styling
 */
const Img = ({ src, altText, styleClass = '' }) => {
  return (
    <div className={`card-image main-pic ${styleClass}`}>
      <img src={src} alt={altText} />
    </div>
  );
};

export default Img;
