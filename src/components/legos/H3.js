/* eslint-disable no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../../design/masterDesignLanguage';
/* eslint-enable no-unused-vars */

/**
 *
 * @param {Object} param0 - the props
 * @param {string} param0.text - the text to display
 * @param {string} [param0.styleClass] - optional class to add for styling
 */
const H3 = ({ text, styleClass = '' }) => (
  <ReactMarkdown
    className={`${mdl.colors.mainText} ${styleClass}`}
    source={`### ${text}`}
  />
);

export default H3;
