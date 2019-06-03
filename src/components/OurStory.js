/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import H2 from './legos/H2';
import H3 from './legos/H3';
import Img from './legos/Img';
import BodyText from './legos/BodyText';
import '../styles/OurStory.css';
/* eslint-enable no-unused-vars */

const OurStory = () => {
  const { state } = useContext(SiteContext);
  const {
    pageContent: { ourStory },
    images: { ourStoryImage, ourStoryImageAltText },
  } = state;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (!ourStory || Object.keys(ourStory).length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const { title, mainText, subtitle } = ourStory;

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary} ${
        mdl.padding.mainPaddingAllSides
      }`}
    >
      <H2 text={title} />
      <H3
        text={subtitle}
        styleClass={`${mdl.text.mainShadow} ${
          mdl.text.fonts.mainHeading
        } our-story-subtitle`}
      />
      <div className={`card ${mdl.colors.whiteBackground}`}>
        {ourStoryImage && Object.keys(ourStoryImage).length && (
          <Img
            src={ourStoryImage}
            altText={ourStoryImageAltText}
            styleClass="our-story-pic"
          />
        )}
      </div>
      <BodyText text={mainText} />
    </div>
  );
};

export default OurStory;
