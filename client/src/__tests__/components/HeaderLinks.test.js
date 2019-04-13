/* global it */

/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
/* eslint-disable-next-line no-unused-vars */
import App from '../../components/HeaderLinks';

describe('HeaderLinks.', () => {
  const props = {
    home: {
      text: 'Home',
      url: '/',
    },
    ceremony: {
      text: 'Ceremony',
      url: '/ceremony',
    },
    reception: {
      text: 'Reception',
      url: '/reception',
    },
    rsvp: {
      text: 'RSVP',
      url: '/rsvp',
    },
    ourStory: {
      text: 'Our Story',
      url: '/our-story',
    },
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly.', () => {
    const tree = renderer.create(<App {...props} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div
  className="header-links"
>
  <ul>
    <li>
      <a
        href="/"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="/ceremony"
      >
        Ceremony
      </a>
    </li>
    <li>
      <a
        href="/reception"
      >
        Reception
      </a>
    </li>
    <li>
      <a
        href="/rsvp"
      >
        RSVP
      </a>
    </li>
    <li>
      <a
        href="/our-story"
      >
        Our Story
      </a>
    </li>
  </ul>
</div>
`);
  });
});
