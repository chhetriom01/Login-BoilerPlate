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
import NavBar from '../DashBoard/navbar'

export class Testimonial extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input label="Person Name" placeholder="personName" />
        </Form.Group>

        <Form.Group unstackable widths={2}>
          <Form.Input label="Testimonial Content" placeholder="testimonialContent" />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input label="Organization" placeholder="organization" />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input label="Message" placeholder="message" />
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Testimonial);
