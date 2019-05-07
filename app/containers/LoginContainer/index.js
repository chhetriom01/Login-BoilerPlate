import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loginRequest } from './actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import bindActionCreators from 'redux';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link, browserHistory } from 'react-router';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: 'superadmin',
        password: 'superadmin@123',
      },
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(loginRequest(this.state.credentials));
  };
  onInputChange = e => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  };

  resetvalue = () => {
    this.setState({
      credentials: {
        username: '',
        password: '',
      },
    });
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="ui input focus">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username </label>
            <input
              required
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.onInputChange}
              placeholder="Enter the username"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.onInputChange}
              placeholder="Enter the password"
            />
          </Form.Field>

          <Button type="submit">Submit</Button>
          <Button onClick={this.resetvalue}>Reset</Button>
        </Form>
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'LoginContainer', reducer });
const withSaga = injectSaga({ key: 'LoginContainer', saga });

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ loginRequest }, dispatch);
// }


const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

// const withConnect = connect(
//   null,
//   null,
// );

export default compose(
  withReducer,
  withSaga,
  connect(
    mapStateToProps,
    null,
  ),
)(LoginContainer);
