import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Landing from './components/pages/Landing';
import CompetitionForm from './forms/CompetitionForm';

const App = ({ location }) => (
  <div className="ui container">
    <Route exact path="/" location={location} component={Landing} />
    <Route
      path="/take-the-challenge"
      location={location}
      component={CompetitionForm}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
