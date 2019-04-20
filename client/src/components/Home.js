import React, { useContext } from 'react';
import mdl from '../design/masterDesignLanguage';
import SiteContext from '../context';

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
      className={`card page-component z-depth-1 ${mdl.colors.tertiary} ${
        mdl.padding.mainPaddingAllSides
      }`}
    >
      <p className={`${mdl.colors.whiteText}`}>{home.introText}</p>
    </div>
  );
};

export default Home;
