import * as React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class HeaderLinks extends React.Component {
  // TODO: replacehardcoded text with CMS data
  render() {
    return (
      <div className="header-links">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ceremony">Ceremony</Link>
            </li>
            <li>
              <Link to="/reception">Reception</Link>
            </li>
            <li>
              <Link to="/rsvp">RSVP</Link>
            </li>
            <li>
              <Link to="/our-story">Our Story</Link>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}

export default HeaderLinks;

