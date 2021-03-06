/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import SiteContext from '../context';
import mdl from '../design/masterDesignLanguage';
import H2 from './legos/H2';
import Button from './legos/Button';
import '../styles/RSVP.css';
import doIContainValidData from '../helpers/doIContainValidData';
/* eslint-enable no-unused-vars */

const RSVP = () => {
  const [isComing, setIsComing] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [entreeChoice, setEntreeChoice] = useState('default');
  const [age, setAge] = useState('ofDrinkingAge');
  const [note, setNote] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { state } = useContext(SiteContext);
  const {
    pageContent: { rsvp },
    dates,
  } = state;

  const checkIfValidData = async () => {
    const pending = [doIContainValidData(rsvp), doIContainValidData(dates)];
    const results = await Promise.all(pending);
    if (results.includes(false)) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIfValidData();
  });

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const {
    title,
    generalInstructions,
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
    ageSelectorOptions,
    notePlaceholder,
    noteInstructions,
  } = rsvp;

  const { austinEvent, austinEventLong } = dates;

  const activateSuccessState = () => {
    setAccessCode('');
    setFirstName('');
    setLastName('');
    setIsComing(true);
    setEntreeChoice('default');
    setAge('ofDrinkingAge');
    setNote('');
    setIsSubmitted(true);
  };

  const sendData = async () => {
    const domain =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8004'
        : `https://${window.location.host}`;
    const url = `${domain}/api/rsvpService.js`;
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
        age,
        additionalNote: note,
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
      <h4>{ageSelectorInstructions.replace('{{date}}', austinEvent)}</h4>
      {ageSelectorOptions.map(opt => (
        <p key={opt.id}>
          <label>
            <input
              name={opt.name}
              type="radio"
              onChange={() => setAge(opt.value)}
              value={opt.value}
              checked={age === opt.value}
            />
            <span>{opt.labelText}</span>
          </label>
        </p>
      ))}
    </form>
  );

  if (isSubmitted) {
    return (
      <div
        className={`card page-component z-depth-1 center ${mdl.colors.primary}`}
      >
        <H2 text={title} />
        <p className={`submit-message ${mdl.colors.mainText}`}>
          {successfulSubmitMessage}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`card page-component z-depth-1 center rsvp-main-container ${
        mdl.colors.primary
      } ${mdl.colors.whiteText}`}
    >
      <H2 text={title} />
      <h4 className="general-instructions">{generalInstructions}</h4>
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
        </form>
        <form action="#" className="confirmation-form">
          <ReactMarkdown
            source={confirmationQuery.replace('{{date}}', austinEventLong)}
            className="confirmation-details"
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
      <label className={`note-instructions ${mdl.colors.whiteText}`}>
        {noteInstructions}
        <textarea
          placeholder={notePlaceholder}
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </label>
      <Button onClick={sendData} text="Send" icon="send" title="Send" />
    </div>
  );
};

export default RSVP;
