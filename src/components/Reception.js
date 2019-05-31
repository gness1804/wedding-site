import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import H2 from './legos/H2';
import Img from './legos/Img';
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

  const { title, mapTitle, subtitle, mainImage, mainImageAltText } = reception;

  const mapKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary} ${
        mdl.colors.whiteText
      }`}
    >
      <H2 text={title} />
      <ReactMarkdown className={`${mdl.colors.mainText}`} source={subtitle} />
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
      <Img src={mainImage} altText={mainImageAltText} />
    </div>
  );
};

export default Reception;
