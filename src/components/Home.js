/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import Img from './legos/Img';
import BodyText from './legos/BodyText';
import H3 from './legos/H3';
import '../styles/Home.css';
/* eslint-enable no-unused-vars */

const Home = () => {
  const { state } = useContext(SiteContext);
  const {
    pageContent: { home },
    images: { heroImage, heroImageAltText },
  } = state;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (!home || Object.keys(home).length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div
      className={`card page-component z-depth-1 ${mdl.colors.primary} ${
        mdl.padding.mainPaddingAllSides
      }`}
    >
      <div className={`card ${mdl.colors.whiteBackground}`}>
        {heroImage && Object.keys(heroImage).length > 0 && (
          <Img src={heroImage} altText={heroImageAltText} />
        )}
        <div className="card-content">
          <p>{home.mainPicDescription}</p>
        </div>
      </div>
      <H3 text={home.introText} />
      <BodyText text={home.detailsText} />
      <BodyText text={home.callToAction} />
    </div>
  );
};

export default Home;
