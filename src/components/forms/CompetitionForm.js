import React from "react";
import { Form, Button, Message } from "semantic-ui-react";

import InlineError from "../messages/InlineError";
import mySeoMatcher from "../../utils/mySeoMatcher";
import ResultPage from "../pages/ResultPage";

class CompetitionForm extends React.Component {
  state = {
    data: {
      participantName: "",
      title: "",
      description: ""
    },
    loading: false,
    errors: {},
    val: 0,
    shouldRedirect: false
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      const val = this.calculate(this.state.data);
      console.log(val);
      this.setState({ val: val, loading: false, shouldRedirect: true });
    }
  };

  calculate = data => {
    const title = data.title;
    const description = data.description;

    let titleScore = 0;
    let descriptionScore = 0;

    if (55 <= title.length <= 65) {
      titleScore += 10;
    }

    if (45 < title.length < 55 || 65 < title.length < 75) {
      titleScore += 7;
    }

    if (35 < title.length < 45 || 75 < title.length < 85) {
      titleScore += 3;
    }

    if (0 < title.length < 35 || 85 < title.length < 10000) {
      titleScore += 0;
    }

    if (135 <= description.length <= 150) {
      descriptionScore += 10;
    }

    if (100 < description.length < 135 || 150 < description.length < 185) {
      descriptionScore += 7;
    }

    if (75 < description.length < 100 || 185 < description.length < 210) {
      descriptionScore += 3;
    }

    if (0 < description.length < 75 || 210 < description.length < 10000) {
      descriptionScore += 0;
    }

    console.log(mySeoMatcher());

    const splitTitle = title.split("");
    const splitDescription = description.split("");

    for (let word of splitTitle) {
      if (mySeoMatcher().includes(word)) {
        titleScore += 10;
      }
    }

    for (let word of splitDescription) {
      if (mySeoMatcher().includes(word)) {
        descriptionScore += 10;
      }
    }

    return {
      titleScore,
      descriptionScore
    };
  };

  validate = data => {
    const errors = {};
    if (!data.participantName) {
      errors.participantName = "Can't be blank";
    }

    if (!data.title) {
      errors.title = "Can't be blank";
    }

    if (!data.description) {
      errors.description = "Can't be blank";
    }

    return errors;
  };

  render() {
    const { data, errors, loading, shouldRedirect } = this.state;

    if (shouldRedirect === true) {
      return <ResultPage val={this.state.val} />;
    } else {
      return (
        <div>
          <div className="ui hidden divider" />
          <h2 className="ui center aligned header">
            Please enter your details to get started
          </h2>
          <Form onSubmit={this.onSubmit} loading={loading}>
            {errors.message && (
              <Message negative>
                <Message.Header>Something went wrong</Message.Header>
                <p>{errors.message}</p>
              </Message>
            )}

            <Form.Field error={!!errors.participantName}>
              <label htmlFor="participantName">Please enter your name</label>
              <input
                type="text"
                id="participantName"
                name="participantName"
                placeholder="John Doe"
                value={data.participantName}
                onChange={this.onChange}
              />
              {errors.participantName && (
                <InlineError text={errors.participantName} />
              )}
            </Form.Field>

            <Form.Field error={!!errors.title}>
              <label htmlFor="title">Please enter the title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="My awesome title"
                value={data.title}
                onChange={this.onChange}
              />
              {errors.title && <InlineError text={errors.title} />}
            </Form.Field>

            <Form.Field error={!!errors.description}>
              <label htmlFor="description">Please enter the description</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="My awesome description"
                value={data.description}
                onChange={this.onChange}
              />
              {errors.description && <InlineError text={errors.description} />}
            </Form.Field>

            <Button primary>Submit</Button>
          </Form>
        </div>
      );
    }
  }
}

export default CompetitionForm;