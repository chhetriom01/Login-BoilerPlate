/**
 *
 * Testimonial
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Redirect, Link } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import NavBar from '../DashBoard/navbar';
import {submittestimonial} from './actions';

export class Testimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        personName: 'Om Bahadur Chhetri ',
        testimonialContent: 'Article',
        organization: 'BitsBeat',
        message: 'this is the message',
      },
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(submittestimonial(this.state.data));
  };

  onInputChange = event => {
    const field = event.target.name;
    const data = this.state.data;
    data[field] = event.target.value;
    return this.setState({
      data: data,
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Person Name"
              placeholder="Enter personName"
              name="personName"
              value={this.state.data.personName}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Testimonial Content"
              placeholder="testimonialContent"
              name="testomonialContent"
              value={this.state.data.testimonialContent}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Organization"
              placeholder="Name of organization"
              name="Organization"
              value={this.state.data.organization}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Message"
              placeholder="enter your message"
              name="Message"
              value={this.state.data.message}
              onChange={this.onInputChange}
              required
            />
          </Form.Group>
          <Button type="Submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

Testimonial.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testimonial: makeSelectTestimonial(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Testimonial);
