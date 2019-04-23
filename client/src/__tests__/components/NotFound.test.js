/* global it */

/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
/* eslint-disable-next-line no-unused-vars */
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../components/NotFound';

describe('NotFound.', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly.', () => {
    const tree = renderer
      .create(
        <Router>
          <App />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div
  className="card page-component not-found z-depth-1 pink darken-1"
>
  <h1>
    Sorry, this page does not exist. Please try again.
  </h1>
  <a
    href="/"
    onClick={[Function]}
  >
    Home
  </a>
</div>
`);
  });
});
