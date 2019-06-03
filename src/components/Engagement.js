/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import H2 from './legos/H2';
import H3 from './legos/H3';
import Img from './legos/Img';
import BodyText from './legos/BodyText';
/* eslint-enable no-unused-vars */

const Engagement = () => {
  const { state } = useContext(SiteContext);
  const {
    pageContent: { engagement },
  } = state;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (!engagement || Object.keys(engagement).length === 0) {
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
    engagementPhoto,
    engagementPhotoAltText,
  } = engagement;

  // TODO: add our engagement photo and brief story
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
    </div>
  );
};

export default Engagement;
