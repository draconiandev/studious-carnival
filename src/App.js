import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import Landing from './components/pages/Landing';

const App = ({ location }) => (
  <div className="ui container">
    <Route exact path="/" location={location} component={Landing} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
