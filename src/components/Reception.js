import React from 'react';
import mdl from '../design/masterDesignLanguage';

const Reception = () => {
  const mapKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div className={`card page-component z-depth-1 ${mdl.colors.primary}`}>
      <p>I am the reception component.</p>
      {mapKey && (
        <iframe
          // width="600"
          // height="450"
          frameBorder={0}
          // style="border:0"
          src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}
        &q=Steiner+Ranch+Steakhouse+Austin+TX`}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Reception;
