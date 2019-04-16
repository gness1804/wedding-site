/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SiteContext from '../context';
import calcCountDownDate from '../helpers/calcCountdownDate';
import mdl from '../design/masterDesignLanguage';

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
        <p>{header.counterWedding.replace('{{counter}}', daysUntilCeremony)}</p>
        <p>
          {header.counterReception.replace('{{counter}}', daysUntilReception)}
        </p>
      </div>
    );
  }

  const { home, ceremony, reception, rsvp, ourStory } = header.links;
  const linksElem = (
    <div className="nav-content">
      <ul className="tabs tabs-transparent center">
        <li className="tab">
          <Link className={`${mdl.colors.mainText}`} to={home.url}>{home.text} </Link>
        </li>
        <li className="tab">
          <Link className={`${mdl.colors.mainText}`} to={ceremony.url}>{ceremony.text}</Link>
        </li>
        <li className="tab">
          <Link className={`${mdl.colors.mainText}`} to={reception.url}>{reception.text}</Link>
        </li>
        <li className="tab">
          <Link className={`${mdl.colors.mainText}`} to={rsvp.url}>{rsvp.text}</Link>
        </li>
        <li className="tab">
          <Link className={`${mdl.colors.mainText}`} to={ourStory.url}>{ourStory.text}</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className={`header-main-container ${mdl.colors.primaryCard}`}>
        <div className="nav-wrapper">
          <a href={header.links.home.url}>
          <h1 className={`brand-logo center ${mdl.colors.mainText}`}>{header.title}</h1>
          </a>
        </div>
        {linksElem}
      </div>
      {counterElem}
    </>
  );
};

export default Header;
