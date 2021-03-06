/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import H2 from './legos/H2';
import H3 from './legos/H3';
import Img from './legos/Img';
import Button from './legos/Button';
import BodyText from './legos/BodyText';
import '../styles/Reception.css';
import doIContainValidData from '../helpers/doIContainValidData';
/* eslint-enable no-unused-vars */

const Reception = () => {
  const { state } = useContext(SiteContext);
  const [isLoading, setIsLoading] = useState(true);

  const {
    pageContent: { reception },
  } = state;

  const checkIfValidData = async () => {
    const pending = [doIContainValidData(reception)];
    const results = await Promise.all(pending);
    if (results.includes(false)) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIfValidData();
  });

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (isLoading) {
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
        mdl.padding.mainPaddingAllSides
      }`}
    >
      <H2 text={title} />
      <H3 text={subtitle} />
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
      <BodyText text={venueDescription} />
      <Button onClick={goToRSVPPage} text="RSVP" title="RSVP" />
    </div>
  );
};

export default Reception;
