import React from 'react';
import mdl from '../../design/masterDesignLanguage';

/**
 *
 * @param {Object} param0 - the props
 * @param {string} param0.text - the text to display
 * @param {string} [param0.styleClass] - optional class to add for styling
 */
const H2 = ({ text, styleClass = '' }) => {
  return (
    <h2
      className={`page-header-text ${mdl.colors.mainText} ${
        mdl.text.mainShadow
      } ${mdl.text.fonts.mainContent} ${styleClass}`}
    >
      {text}
    </h2>
  );
};

export default H2;
