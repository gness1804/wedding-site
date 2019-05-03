import React, { useContext } from 'react';
import axios from 'axios';
import SiteContext from '../context';
import mdl from '../design/masterDesignLanguage';
import '../styles/RSVP.css';

const RSVP = () => {
  const { state } = useContext(SiteContext);
  const {
    pageContent: { rsvp },
  } = state;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (!rsvp || Object.keys(rsvp).length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const sendData = async () => {
    await axios.post(
      'http://localhost:8004/server/rsvpService.js', // replace with actual endpoint
      {
        // stub
        isTest: true,
        firstName: 'Donald',
        lastName: 'Duck',
        isComing: false,
        // accessCode: process.env.REACT_APP_ACCESS_CODE,
      },
    );
  };

  const { title } = rsvp;

  return (
    <div
      className={`card page-component z-depth-1 center ${mdl.colors.primary}`}
    >
      <h2
        className={`page-header-text ${mdl.colors.mainText} ${
          mdl.text.mainShadow
        } ${mdl.text.fonts.mainContent}`}
      >
        {title}
      </h2>
      <button onClick={sendData}>Send</button>
    </div>
  );
};

export default RSVP;
