import React, { useContext } from 'react';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import '../styles/Reception.css';

const Reception = () => {
  const { state } = useContext(SiteContext);
  const {
    pageContent: { reception },
  } = state;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (!reception || Object.keys(reception).length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const { title, mapTitle } = reception;

  const mapKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary} ${
        mdl.colors.whiteText
      }`}
    >
      <h2
        className={`page-header-text ${mdl.colors.mainText} ${
          mdl.text.mainShadow
        } ${mdl.text.fonts.mainContent}`}
      >
        {title}
      </h2>
      {process.env.NODE_ENV !== 'development' && mapKey && (
        <iframe
          className="google-map-container"
          frameBorder={0}
          title={mapTitle}
          src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}
        &q=Steiner+Ranch+Steakhouse+Austin+TX`}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Reception;
