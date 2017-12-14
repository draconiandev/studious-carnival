import React from "react";

import CompetitionForm from "../forms/CompetitionForm";
import ProblemStatement from "./ProblemStatement";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="ui hidden divider" />
        <h1 className="ui center aligned header">
          Welcome to Move SEO Challenge
        </h1>
        <div>
          <p>
            In this challenge, we are going to present you the case of a young
            real estate portal who wants to make foray into their industry with
            a bang! Help them come up with a title, description and the keywords
            that you think will bring their search results to the top.
          </p>
          <ProblemStatement />
          <div className="ui hidden divider" />
          <CompetitionForm />
        </div>
      </div>
    );
  }
}

export default Landing;
