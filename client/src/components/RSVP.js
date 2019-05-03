import React, { useContext, useState } from 'react';
import axios from 'axios';
import SiteContext from '../context';
import mdl from '../design/masterDesignLanguage';
import '../styles/RSVP.css';

const RSVP = () => {
  const [isComing, setIsComing] = useState(true);
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
    // TODO: be sure to add try catch block
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

  const { title, isComingYes, isComingNo } = rsvp;
  let showBottomPartClass = 'hide';
  if (isComing) {
    showBottomPartClass = 'show';
  }

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
      {/*access* code entry goes here */}
      {/*name forms go here*/}
      <form action="#" className="confirmation-form">
        <p>
          <label>
            <input
              name="confirmation-radio"
              type="radio"
              checked={isComing}
              onChange={() => {
                setIsComing(true);
              }}
            />
            <span className="radio-button-text">{isComingYes}</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="confirmation-radio"
              type="radio"
              checked={!isComing}
              onChange={() => {
                setIsComing(false);
              }}
            />
            <span className="radio-button-text">{isComingNo}</span>
          </label>
        </p>
      </form>
      <div className={`is-coming-form-container ${showBottomPartClass}`}>
        <p>I should only show when the user is coming.</p>
      </div>
      <button onClick={sendData}>Send</button>
    </div>
  );
};

export default RSVP;
