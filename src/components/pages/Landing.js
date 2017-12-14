import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <h1>Landing Page</h1>
    <div>
      <Link to="/take-the-challenge">Enter competition</Link>
    </div>
  </div>
);

export default Landing;
