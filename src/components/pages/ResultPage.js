import React from "react";

class ResultPage extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    let grade;
    if (props.val.descriptionScore >= 50) {
      grade = "A";
    } else if (props.val.descriptionScore >= 25) {
      grade = "B";
    } else {
      grade = "C";
    }
    this.state = {
      descriptionScore: props.val.descriptionScore,
      titleScore: props.val.titleScore,
      grade: grade
    };
  }

  render() {
    if (this.state.descriptionScore) {
      return (
        <div>
          <h2>
            Congrats! You have successfully earned {this.state.grade} grade
          </h2>
        </div>
      );
    }
  }
}

export default ResultPage;
