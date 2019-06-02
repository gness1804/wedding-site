/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';
import Img from './legos/Img';
import '../styles/Home.css';
/* eslint-enable no-unused-vars */

const Home = () => {
  const { state } = useContext(SiteContext);
  const {
    pageContent: { home },
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
        <Img src={home.mainPic} altText={home.mainPicAltText} />
        <div className="card-content">
          <p>{home.mainPicDescription}</p>
        </div>
      </div>
      <ReactMarkdown
        className={`${mdl.colors.mainText}`}
        source={home.introText}
      />
      <ReactMarkdown
        className={`${mdl.colors.whiteText}`}
        source={home.detailsText}
      />
      <ReactMarkdown
        className={`${mdl.colors.whiteText}`}
        source={home.callToAction}
      />
    </div>
  );
};

export default Home;
