import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class HeaderLinks extends React.Component {
  // TODO: replace hardcoded text with CMS data
  render() {
    return (
      <div className="header-links">
        <Router>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/ceremony">Ceremony</a>
            </li>
            <li>
              <a href="/reception">Reception</a>
            </li>
            <li>
              <a href="/rsvp">RSVP</a>
            </li>
            <li>
              <a href="/our-story">Our Story</a>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}

export default HeaderLinks;
