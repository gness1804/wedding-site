/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import SiteContext from './context';
import reducer from './reducer';
import { getPageContent, getDates } from './actions';
import Header from './components/Header';
import Home from './components/Home';
import Ceremony from './components/Ceremony';
import OurStory from './components/OurStory';
import Reception from './components/Reception';
import RSVP from './components/RSVP';
import NotFound from './components/NotFound';
import mdl from './design/masterDesignLanguage';

const App = () => {
  const initState = useContext(SiteContext);
  const [state, dispatch] = useReducer(reducer, initState);

  // action creators
  const getPageContentCreator = data => ({
    ...getPageContent,
    pageContent: data,
  });

  // action creators
  const getDatesCreator = data => ({
    ...getDates,
    dates: data,
  });

  const loadContent = async () => {
    try {
      const domain =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:8004'
          : `https://${window.location.host}`;
      const contentUrl = `${domain}/api/contentService.js`;
      const contentRes = await axios.get(contentUrl);

      dispatch(getPageContentCreator(contentRes.data));

      const datesUrl = `${domain}/api/datesService.js`;
      const datesRes = await axios.get(datesUrl);

      dispatch(getDatesCreator(datesRes.data));
    } catch (err) {
      throw new Error(
        `Error fetching page content: ${err.message || JSON.stringify(err)}`,
      );
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <SiteContext.Provider value={{ state, dispatch }}>
      <Router>
        <div
          className={`container ${mdl.colors.mainBackground} ${
            mdl.text.fonts.mainContent
          }`}
        >
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ceremony" component={Ceremony} />
            <Route path="/reception" component={Reception} />
            <Route path="/rsvp" component={RSVP} />
            <Route path="/our-story" component={OurStory} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </SiteContext.Provider>
  );
};

export default App;
