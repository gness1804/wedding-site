import React from 'react';
import axios from 'axios';
import mdl from '../design/masterDesignLanguage';

const RSVP = () => {
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

  return (
    <div className={`card page-component z-depth-1 ${mdl.colors.primary}`}>
      <p>I am the RSVP component.</p>
      <button onClick={sendData}>Send</button>
    </div>
  );
};

export default RSVP;
