/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import calcCountDownDate from '../helpers/calcCountdownDate';

const Header = () => {
  const [content, setContent] = useState({});
  const [dates, setDates] = useState({});
  let counterElem = null;
  let headerElem = null;

  const loadContent = async () => {
    try {
      const url = '/api/v1/content/header';
      const res = await axios.get(url);
      setContent(res.data.header);
      setDates(res.data.dates);
    } catch (err) {
      throw new Error(
        `Error fetching page content: ${err.message || JSON.stringify(err)}`,
      );
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const daysUntilCeremony = Math.floor(calcCountDownDate(dates.ceremony));
  const daysUntilReception = Math.floor(calcCountDownDate(dates.reception));

  if (daysUntilCeremony && daysUntilReception) {
    counterElem = (
      <div className="counter-elem">
        <p>
          {content.counterWedding.replace('{{counter}}', daysUntilCeremony)}
        </p>
        <p>
          {content.counterReception.replace('{{counter}}', daysUntilReception)}
        </p>
      </div>
    );
  }

  if (content.links && Object.keys(content.links).length > 0) {
    const { home, ceremony, reception, rsvp, ourStory } = content.links;
    headerElem = (
      <ul>
        <li>
          <Link to={home.url}>{home.text} </Link>
        </li>
        <li>
          <Link to={ceremony.url}>{ceremony.text}</Link>
        </li>
        <li>
          <Link to={reception.url}>{reception.text}</Link>
        </li>
        <li>
          <Link to={rsvp.url}>{rsvp.text}</Link>
        </li>
        <li>
          <Link to={ourStory.url}>{ourStory.text}</Link>
        </li>
      </ul>
    );
  }

  return (
    <div>
      {headerElem}
      {Object.keys(content).length > 0 && (
        <div className="header-main-container">
          <h1>{content.title}</h1>
          {counterElem}
        </div>
      )}
    </div>
  );
};

export default Header;
