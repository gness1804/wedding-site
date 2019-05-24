/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import SiteContext from '../context';
import calcCountDownDate from '../helpers/calcCountdownDate';
import mdl from '../design/masterDesignLanguage';
import '../styles/Header.css';

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

  const daysUntilChinaEvent = Math.floor(calcCountDownDate(dates.chinaEvent));
  const daysUntilAustinEvent = Math.floor(calcCountDownDate(dates.austinEvent));

  if (daysUntilChinaEvent && daysUntilAustinEvent) {
    counterElem = (
      <div
        className={`counter-elem card center z-depth-2 ${mdl.colors.primary} ${
          mdl.padding.mainPaddingAllSides
        } ${mdl.text.fonts.mainHeading}`}
      >
        <ReactMarkdown
          className={`${mdl.colors.mainText} ${mdl.text.mainShadow}`}
          source={header.counterAustinEvent.replace(
            '{{counter}}',
            daysUntilChinaEvent,
          )}
        />
        <ReactMarkdown
          className={`${mdl.colors.mainText} ${mdl.text.mainShadow}`}
          source={header.counterReception.replace(
            '{{counter}}',
            daysUntilAustinEvent,
          )}
        />
      </div>
    );
  }

  // TODO:
  // Replace with links to new pages for Austin and Beijing celebrations
  const { home, ceremony, reception, rsvp, ourStory } = header.links;
  const linksElem = (
    <div className="nav-content header-links">
      <ul className="tabs tabs-transparent center header-links-desktop">
        <li className="tab">
          <Link
            className={`${mdl.colors.mainText}`}
            to={home.url}
            title={home.text}
          >
            {home.text}
          </Link>
        </li>
        {/* <li className="tab">
          <Link
            className={`${mdl.colors.mainText}`}
            to={ceremony.url}
            title={ceremony.text}
          >
            {ceremony.text}
          </Link>
        </li> */}
        {/* <li className="tab">
          <Link
            className={`${mdl.colors.mainText}`}
            to={reception.url}
            title={reception.text}
          >
            {reception.text}
          </Link>
        </li> */}
        <li className="tab">
          <Link
            className={`${mdl.colors.mainText}`}
            to={rsvp.url}
            title={rsvp.text}
          >
            {rsvp.text}
          </Link>
        </li>
        <li className="tab">
          <Link
            className={`${mdl.colors.mainText}`}
            to={ourStory.url}
            title={ourStory.text}
          >
            {ourStory.text}
          </Link>
        </li>
      </ul>

      <ul className="center header-links-mobile">
        <li>
          <Link to={home.url} title={home.text}>
            <i className="material-icons">home</i>
          </Link>
        </li>
        {/* <li>
          <Link to={ceremony.url} title={ceremony.text}>
            <i className="material-icons">account_balance</i>
          </Link>
        </li> */}
        {/* <li>
          <Link to={reception.url} title={reception.text}>
            <i className="material-icons">local_bar</i>
          </Link>
        </li> */}
        <li>
          <Link to={rsvp.url} title={rsvp.text}>
            <i className="material-icons">person_add</i>
          </Link>
        </li>
        <li>
          <Link to={ourStory.url} title={ourStory.text}>
            <i className="material-icons">library_books</i>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className={`header-main-container z-depth-3 ${mdl.colors.primary}`}>
        <div className="nav-wrapper">
          <a href={header.links.home.url} title={header.title}>
            <h1
              className={`brand-logo center headline-text ${
                mdl.colors.mainText
              } ${mdl.text.mainShadow} ${mdl.text.fonts.mainHeading}`}
            >
              {header.title}
            </h1>
          </a>
        </div>
        {linksElem}
      </div>
      {counterElem}
    </>
  );
};

export default Header;
