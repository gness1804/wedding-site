import React, { useContext, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import SiteContext from '../context';
import mdl from '../design/masterDesignLanguage';
import '../styles/RSVP.css';

const RSVP = () => {
  const [isComing, setIsComing] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [entreeChoice, setEntreeChoice] = useState('default');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { state } = useContext(SiteContext);
  const {
    pageContent: { rsvp },
    dates,
  } = state;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (
    !rsvp ||
    Object.keys(rsvp).length === 0 ||
    Object.keys(dates).length === 0
  ) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const {
    title,
    isComingYes,
    isComingNo,
    firstNameLabel,
    lastNameLabel,
    accessCodeLabel,
    confirmationQuery,
    accessCodeErrorMessage,
    altAccessCodeErrorMessage,
    accessCodeInputHelperText,
    successfulSubmitMessage,
    invalidInputError,
    entreeOptions,
    entreeSelectionInstructions,
    noEntreeError,
    ageSelectorInstructions,
  } = rsvp;

  const { reception, receptionLong } = dates;

  const activateSuccessState = () => {
    setAccessCode('');
    setFirstName('');
    setLastName('');
    setIsComing(true);
    setEntreeChoice('default');
    setIsSubmitted(true);
  };

  const sendData = async () => {
    const url =
      process.env.NODE_ENV !== 'development'
        ? 'https://flora-and-grahams-wedding.grahamnessler.now.sh/server/rsvpService.js'
        : '/guests';
    if (!firstName || !lastName) {
      alert(invalidInputError);
      return;
    }
    if (isComing && entreeChoice === 'default') {
      alert(noEntreeError);
      return;
    }
    try {
      const response = await axios.post(url, {
        isTest: process.env.NODE_ENV === 'development',
        firstName,
        lastName,
        isComing,
        accessCode,
        entreeChoice,
      });
      if (response && response.status && response.status === 200) {
        activateSuccessState();
      } else {
        alert(altAccessCodeErrorMessage);
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert(accessCodeErrorMessage);
      } else {
        alert(altAccessCodeErrorMessage);
      }
    }
  };

  let showBottomPartClass = 'hide';
  if (isComing) {
    showBottomPartClass = 'show';
  }

  const entreesSelectionElement = (
    <div className="entrees-selection-elem input-field">
      <h4>{entreeSelectionInstructions}</h4>
      <select
        value={entreeChoice}
        onChange={e => setEntreeChoice(e.target.value)}
      >
        {entreeOptions.map(entree => (
          <option
            value={entree.value}
            disabled={entree.isSelected}
            key={entree.id}
          >
            {entree.title}
          </option>
        ))}
      </select>
    </div>
  );

  const ageSelectionElement = (
    <form action="#">
      <h4>{ageSelectorInstructions.replace('{{date}}', reception)}</h4>
    </form>
  );

  if (isSubmitted) {
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
        <p className={`submit-message ${mdl.colors.mainText}`}>
          {successfulSubmitMessage}
        </p>
      </div>
    );
  }

  // TODO: include instructions on entering in info for each member of party
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
      <div className="forms-container">
        <form className="access-code-entry-form">
          <div className="input-field">
            <label htmlFor="access-code">
              {accessCodeLabel}
              <input
                type="password"
                value={accessCode}
                className="validate"
                id="access-code"
                onChange={e => {
                  setAccessCode(e.target.value);
                }}
              />
            </label>
            <span>{accessCodeInputHelperText}</span>
          </div>
        </form>
        <form className="names-entry-form" action="#">
          <>
            <div className="input-field">
              <label htmlFor="first-name">
                {firstNameLabel}
                <input
                  type="text"
                  value={firstName}
                  className="validate"
                  id="first-name"
                  onChange={e => {
                    setFirstName(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="input-field">
              <label htmlFor="last-name">
                {lastNameLabel}
                <input
                  type="text"
                  value={lastName}
                  className="validate"
                  id="last-name"
                  onChange={e => {
                    setLastName(e.target.value);
                  }}
                />
              </label>
            </div>
          </>
        </form>
        <form action="#" className="confirmation-form">
          <ReactMarkdown
            source={confirmationQuery.replace('{{date}}', receptionLong)}
          />
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
      </div>
      <div className={`is-coming-form-container ${showBottomPartClass}`}>
        {entreesSelectionElement}
        {ageSelectionElement}
      </div>
      {/*maybe include a textarea where they can add any notes to us*/}
      <button onClick={sendData}>Send</button>
    </div>
  );
};

export default RSVP;
