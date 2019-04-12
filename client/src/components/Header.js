/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calcCountDownDate from '../helpers/calcCountdownDate';

const Header = () => {
  const [content, setContent] = useState({});
  const [dates, setDates] = useState({});

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

  const ceremonyDateCounter =  calcCountDownDate(dates.ceremony);

  return (
    <div>
      {Object.keys(content) && (
        <div className="header-main-container">
          <h1>{content.title}</h1>
          <p>{content.counterWedding}</p>
          <p>{content.counterReception}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
