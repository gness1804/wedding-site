/* global it */

/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
/* eslint-disable-next-line no-unused-vars */
import App from '../../components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly.', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`<div />`);
});
