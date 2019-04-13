import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderLinks extends React.Component {
  render() {
    const { home, ceremony, reception, rsvp, ourStory } = this.props;

    return (
      <div className="header-links">
        <Router>
          <ul>
            <li>
              <a href={home.url}>{home.text}</a>
            </li>
            <li>
              <a href={ceremony.url}>{ceremony.text}</a>
            </li>
            <li>
              <a href={reception.url}>{reception.text}</a>
            </li>
            <li>
              <a href={rsvp.url}>{rsvp.text}</a>
            </li>
            <li>
              <a href={ourStory.url}>{ourStory.text}</a>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}

export default HeaderLinks;

HeaderLinks.propTypes = {
  home: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  ceremony: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  reception: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  rsvp: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  ourStory: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
