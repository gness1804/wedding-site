import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';

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

  const { title, mainImage, mainText, subtitle } = ourStory;

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary} ${
        mdl.padding.mainPaddingAllSides
      }`}
    >
      <h2
        className={`page-header-text ${mdl.colors.mainText} ${
          mdl.text.mainShadow
        } ${mdl.text.fonts.mainContent}`}
      >
        {title}
      </h2>
      <p>{subtitle}</p>
      <div className={`card ${mdl.colors.whiteBackground}`}>
        <div className="card-image main-pic">
          <img src={mainImage} alt="" />
        </div>
      </div>
      <ReactMarkdown className={`${mdl.colors.whiteText}`} source={mainText} />
    </div>
  );
};

export default OurStory;
