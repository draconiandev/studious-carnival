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
    if (this.state.grade === "A") {
      return (
        <div>
          <h2>
            Congrats! You have successfully completed the challenge. You seem
            like a pro!
          </h2>

          <ul>
            <li>You earned {this.state.titleScore} for your title</li>
            <li>
              You earned {this.state.descriptionScore} for your description
            </li>
          </ul>

          <h4>Go spread the SEO knowledge to all the corners of the world!</h4>

          <h3>Have a great day ahead!</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Congrats! You have successfully completed the challenge</h2>

          <ul>
            <li>You earned {this.state.titleScore} for your title</li>
            <li>
              You earned {this.state.descriptionScore} for your description
            </li>
          </ul>

          <h3>Things you can do to improve your score</h3>
          <ul>
            <li>The title should be close to 60 characters long</li>
            <li>
              The description should be between 135 to 165 characters long
            </li>
          </ul>
          <p>This includes all the spaces as well</p>
          <p>
            Of course, this is not a comprehensive SEO guide by any means. But
            we hope you learnt something today.
          </p>
          <h3>Have a great day ahead!</h3>
        </div>
      );
    }
  }
}

export default ResultPage;
