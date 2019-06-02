/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import H2 from './legos/H2';
import Img from './legos/Img';
import Button from './legos/Button';
import '../styles/Reception.css';
/* eslint-enable no-unused-vars */

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

  const {
    title,
    mapTitle,
    subtitle,
    mainImage,
    mainImageAltText,
    venueDescription,
  } = reception;

  const mapKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const goToRSVPPage = () => {
    const protocol =
      process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
    window.location.assign(`${protocol}${window.location.host}/rsvp`);
  };

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary} ${
        mdl.colors.whiteText
      } ${mdl.padding.mainPaddingAllSides}`}
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
      <ReactMarkdown
        className={`${mdl.colors.whiteText}`}
        source={venueDescription}
      />
      <Button onClick={goToRSVPPage} text="RSVP" title="RSVP" />
    </div>
  );
};

export default Reception;
