/* global it, describe, expect */

/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
/* eslint-disable-next-line no-unused-vars */
import App from '../../components/RSVP';
import SiteContext from '../../context';

describe('RSVP.', () => {
  const state = {
    pageContent: {},
    dates: {},
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SiteContext.Provider value={{ state }}>
        <App />
      </SiteContext.Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
