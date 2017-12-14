import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import InlineError from '../components/messages/InlineError';

class CompetitionForm extends React.Component {
  state = {
    data: {
      participantName: '',
      participantEmail: '',
      participantId: ''
    },
    loading: false,
    errors: {}
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
      this.props.submit(this.state.data).catch(err =>
        this.setState({
          errors: { message: err.response.data.errors[0] },
          loading: false
        })
      );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.participantName) {
      errors.participantName = "Can't be blank";
    }

    if (!data.participantEmail) {
      errors.participantEmail = "Can't be blank";
    }

    if (!data.participantId) {
      errors.participantId = "Can't be blank";
    }

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <div className="">
        <h1 className="center">Please enter your details to get started</h1>
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

          <Form.Field error={!!errors.participantEmail}>
            <label htmlFor="participantEmail">
              Please enter your email address
            </label>
            <input
              type="email"
              id="participantEmail"
              name="participantEmail"
              placeholder="johndoe@brillio.com"
              value={data.participantEmail}
              onChange={this.onChange}
            />
            {errors.participantEmail && (
              <InlineError text={errors.participantEmail} />
            )}
          </Form.Field>

          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=""
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button primary>Submit</Button>
        </Form>
      </div>
    );
  }
}

// CompetitionForm.propTypes = {
//   submit: PropTypes.func.isRequired
// };

export default CompetitionForm;
