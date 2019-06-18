/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteContext from '../context';
import calcCountDownDate from '../helpers/calcCountdownDate';
import mdl from '../design/masterDesignLanguage';
import H3 from './legos/H3';
import HeaderLink from './legos/HeaderLink';
import '../styles/Header.css';
import doIContainValidData from '../helpers/doIContainValidData';
/* eslint-enable no-unused-vars */

const Header = ({ match }) => {
  const { state } = useContext(SiteContext);
  const [isLoading, setIsLoading] = useState(true);

  const { pageContent: content, dates } = state;

  let counterElem = null;

  const checkIfValidData = async () => {
    const pending = [doIContainValidData(content), doIContainValidData(dates)];
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

  const { url } = match;

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
        <H3
          text={header.counterBeijingEvent.replace(
            '{{counter}}',
            daysUntilChinaEvent,
          )}
          styleClass={`${mdl.text.mainShadow}`}
        />
        <H3
          text={header.counterAustinEvent.replace(
            '{{counter}}',
            daysUntilAustinEvent,
          )}
          styleClass={`${mdl.text.mainShadow}`}
        />
      </div>
    );
  }

  const { home, reception, rsvp, ourStory, engagement } = header.links;

  const linksElem = (
    <div className="nav-content header-links">
      <ul className="tabs tabs-transparent center header-links-desktop">
        <HeaderLink
          path={home.url}
          tooltip={home.text}
          text={home.text}
          isSelected={url === home.url}
        />
        <HeaderLink
          path={reception.url}
          tooltip={reception.text}
          text={reception.text}
          isSelected={url === reception.url}
        />
        <HeaderLink
          path={rsvp.url}
          tooltip={rsvp.text}
          text={rsvp.text}
          isSelected={url === rsvp.url}
        />
        <HeaderLink
          path={ourStory.url}
          tooltip={ourStory.text}
          text={ourStory.text}
          isSelected={url === ourStory.url}
        />
        <HeaderLink
          path={engagement.url}
          tooltip={engagement.text}
          text={engagement.text}
          isSelected={url === engagement.url}
        />
      </ul>

      <ul className="center header-links-mobile">
        <li>
          <Link to={home.url} title={home.text}>
            <i className="material-icons">home</i>
          </Link>
        </li>
        <li>
          <Link to={reception.url} title={reception.text}>
            <i className="material-icons">local_bar</i>
          </Link>
        </li>
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
        <li>
          <Link to={engagement.url} title={engagement.text}>
            <i className="material-icons">favorite</i>
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
