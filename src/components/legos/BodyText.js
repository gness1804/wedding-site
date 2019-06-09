/* eslint-disable no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../../design/masterDesignLanguage';
/* eslint-enable no-unused-vars */

const Paragraph = ({ children }) => (
  <p className="paragraph-text">{children}</p>
);

const renderers = { paragraph: Paragraph };

/**
 *
 * @param {Object} param0 - the props
 * @param {string} param0.text - the text to display
 * @param {string} [param0.styleClass] - optional class for styling
 */
const BodyText = ({ text, styleClass = '' }) => (
  <ReactMarkdown
    className={`${mdl.colors.whiteText} ${styleClass}`}
    source={text}
    renderers={renderers}
  />
);

export default BodyText;
