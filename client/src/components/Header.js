/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SiteContext from '../context';
import calcCountDownDate from '../helpers/calcCountdownDate';

const Header = () => {
  const { state } = useContext(SiteContext);
  const { pageContent: content, dates } = state;

  let counterElem = null;

  // this has to be hardcoded because if this shows up, it means that CMS data has not come back yet
  if (Object.keys(content).length === 0 || Object.keys(dates).length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const { header } = content;

  const daysUntilCeremony = Math.floor(calcCountDownDate(dates.ceremony));
  const daysUntilReception = Math.floor(calcCountDownDate(dates.reception));

  if (daysUntilCeremony && daysUntilReception) {
    counterElem = (
      <div className="counter-elem">
        <p>
          {header.counterWedding.replace('{{counter}}', daysUntilCeremony)}
        </p>
        <p>
          {header.counterReception.replace('{{counter}}', daysUntilReception)}
        </p>
      </div>
    );
  }

    const { home, ceremony, reception, rsvp, ourStory } = header.links;
    const headerElem = (
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

  return (
    <div>
      {headerElem}
      <div className="header-main-container">
        <h1>{header.title}</h1>
        {counterElem}
      </div>
    </div>
  );
};

export default Header;
