import React from "react";

class ResultPage extends React.Component {
  constructor(props) {
    super();
    let grade;
    if (props.val.descriptionScore >= 50 || props.val.titleScore >= 50) {
      grade = "A";
    } else if (props.val.descriptionScore >= 25 || props.val.titleScore >= 25) {
      grade = "B";
    } else {
      grade = "C";
    }
    this.state = {
      grade: grade,
      descriptionScore: props.val.descriptionScore,
      titleScore: props.val.titleScore
    };
  }

  render() {
    return (
      <div>
        <h2>Congrats! You have successfully earned {this.state.grade} grade</h2>

        <ul>
          <li>You earned {this.state.titleScore} for your title</li>
          <li>You earned {this.state.descriptionScore} for your description</li>
        </ul>
      </div>
    );
  }
}

export default ResultPage;
