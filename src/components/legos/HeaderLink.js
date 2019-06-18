/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import mdl from '../../design/masterDesignLanguage';
import './styles.css';
/* eslint-enable no-unused-vars */

/**
 * renders a header link.
 * @param {string} path - the path to link to.
 * @param {string} tooltip - the title to show in tooltip
 * @param {string} text - the text to show
 * @param {boolean} isSelected - whether the link is selected, i.e. on the current page.
 * @param {string} [styleClass] - optional class for styling
 */
const HeaderLink = ({ path, tooltip, text, isSelected, styleClass = '' }) => {
  const selectedClass = isSelected ? 'selected' : '';
  return (
    <li className="tab">
      <Link
        className={`${mdl.colors.mainText} ${styleClass} ${selectedClass}`}
        to={path}
        title={tooltip}
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
