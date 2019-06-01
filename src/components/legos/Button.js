import React from 'react';
import mdl from '../../design/masterDesignLanguage';

/**
 * @param {Object} param0 - the props
 * @param {Function} param0.onClick - onClick function
 * @param {string} param0.text - the buton text
 * @param {string} [param0.icon=send|null] - optional icon to appear on the button
 * @param {string} [param0.styleClass] - optional class for styling
 */
const Button = ({ onClick, text, icon = '', styleClass = '' }) => {
  let iconElem = null;
  if (icon === 'send') {
    iconElem = <i className="material-icons right">send</i>;
  }

  return (
    <button
      className={`btn waves-effect waves-light ${styleClass}`}
      onClick={onClick}
    >
      {text} {iconElem}
    </button>
  );
};

export default Button;
