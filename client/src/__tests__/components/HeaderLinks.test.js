/* global it */

/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
/* eslint-disable-next-line no-unused-vars */
import App from '../../components/HeaderLinks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly.', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="header-links"
>
  <ul>
    <li>
      <a
        href="/"
        onClick={[Function]}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="/ceremony"
        onClick={[Function]}
      >
        Ceremony
      </a>
    </li>
    <li>
      <a
        href="/reception"
        onClick={[Function]}
      >
        Reception
      </a>
    </li>
    <li>
      <a
        href="/rsvp"
        onClick={[Function]}
      >
        RSVP
      </a>
    </li>
    <li>
      <a
        href="/our-story"
        onClick={[Function]}
      >
        Our Story
      </a>
    </li>
  </ul>
</div>
`);
});
