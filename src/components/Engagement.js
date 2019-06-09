/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import H2 from './legos/H2';
import H3 from './legos/H3';
import Img from './legos/Img';
import BodyText from './legos/BodyText';
import doIContainValidData from '../helpers/doIContainValidData';
/* eslint-enable no-unused-vars */

const Engagement = () => {
  const { state } = useContext(SiteContext);
  const [isLoading, setIsLoading] = useState(true);

  const {
    pageContent: { engagement },
    images: { engagementPhoto, engagementPhotoAltText },
  } = state;

  const checkIfValidData = async () => {
    const pending = [
      doIContainValidData(engagement),
      doIContainValidData(engagementPhoto),
      doIContainValidData(engagementPhotoAltText),
    ];
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
    partyTitle,
    partyMainText,
    storyTitle,
    storyDetails,
  } = engagement;

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary} ${
        mdl.padding.mainPaddingAllSides
      }`}
    >
      <H2 text={title} />
      <H3 text={partyTitle} />
      <BodyText text={partyMainText} />
      <H3 text={storyTitle} />
      <Img src={engagementPhoto} altText={engagementPhotoAltText} />
      <BodyText text={storyDetails} />
    </div>
  );
};

export default Engagement;
