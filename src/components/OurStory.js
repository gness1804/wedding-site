import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import H2 from './legos/H2';
import Img from './legos/Img';
import '../styles/OurStory.css';

const OurStory = () => {
  const { state } = useContext(SiteContext);
  const {
    pageContent: { ourStory },
  } = state;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (!ourStory || Object.keys(ourStory).length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const { title, mainImage, mainText, subtitle, mainImageAltText } = ourStory;

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary} ${
        mdl.padding.mainPaddingAllSides
      }`}
    >
      <H2 text={title} />
      <ReactMarkdown
        className={`${mdl.colors.mainText} ${mdl.text.mainShadow} ${
          mdl.text.fonts.mainHeading
        } our-story-subtitle`}
        source={subtitle}
      />
      <div className={`card ${mdl.colors.whiteBackground}`}>
        <Img
          src={mainImage}
          altText={mainImageAltText}
          styleClass="our-story-pic"
        />
      </div>
      <ReactMarkdown className={`${mdl.colors.whiteText}`} source={mainText} />
    </div>
  );
};

export default OurStory;
