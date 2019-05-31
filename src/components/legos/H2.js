import React from 'react';
import mdl from '../../design/masterDesignLanguage';

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
