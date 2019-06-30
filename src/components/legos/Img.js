/* eslint-disable no-unused-vars */
import React from 'react';
import './styles.css';
/* eslint-enable no-unused-vars */

/**
 *
 * @param {Object} param0 - the props
 * @param {string} param0.src - the source
 * @param {string} param0.altText - the alt text
 * @param {string} [param0.styleClass] - optional class for styling the container div
 * @param {string} [param0.imgStyleClass] - optional class for styling the actual image
 * @param {string} [param0.figCaption] - optional figcaption
 */
const Img = ({
  src,
  altText,
  styleClass = '',
  imgStyleClass = '',
  figCaption = '',
}) => {
  if (figCaption) {
    return (
      <div className={`card-image main-pic ${styleClass}`}>
        <figure>
          <img src={src} alt={altText} className={imgStyleClass} />
          <figcaption>{figCaption}</figcaption>
        </figure>
      </div>
    );
  }

  return (
    <div className={`card-image main-pic ${styleClass}`}>
      <img src={src} alt={altText} className={imgStyleClass} />
    </div>
  );
};

export default Img;
