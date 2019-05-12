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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTestimonial from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Redirect, Link } from 'react-router-dom';
import { Button, Checkbox, Form, Modal, Header, Icon } from 'semantic-ui-react';
import NavBar from '../DashBoard/navbar';
import { submittestimonial, fetchRequesting } from './actions';
import ListTestimonial from './listTestimonial';

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
      open: false,
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

  handleButton = e => {
    e.preventDefault();
    this.props.dispatch(fetchRequesting());
  };
  resetvalue = () => {
    this.setState({
      data: {
        personName: '',
        testimonialContent: '',
        organization: '',
        message: '',
      },
    });
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    // const { token } = this.props.data.manish.value;
    const { open, dimmer } = this.state;
    return (
      <div>
        <NavBar />
        <Button onClick={this.show('blurring')}>AddTestimonial</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon>
          <Modal.Header>Post Testimonial</Modal.Header>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                label="Person Name"
                placeholder="Enter personName"
                name="personName"
                value={this.state.data.personName}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label="Testimonial Content"
                placeholder="testimonialContent"
                name="testimonialContent"
                value={this.state.data.testimonialContent}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Organization"
                placeholder="Name of organization"
                name="organization"
                value={this.state.data.organization}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Message"
                placeholder="enter your message"
                name="message"
                value={this.state.data.message}
                onChange={this.onInputChange}
                required
              />
            </Form.Group>
            <Button type="Submit">Submit</Button>
            <Button onClick={this.resetvalue}>Reset</Button>
          </Form>
        </Modal>

        <Button onClick={this.handleButton}>ListTestimonial</Button>
      </div>
    );
  }
}
const withReducer = injectReducer({ key: 'Testimonial', reducer });
const withSaga = injectSaga({ key: 'Testimonial', saga });

function mapStateToProps(data) {
  // console.log('from testimonial', data);
  return {
    data,
  };
}

const withConnect = connect(mapStateToProps);

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo,
)(Testimonial);
