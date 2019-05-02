/**
 *
 * LoginContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loginRequest } from './actions'
import  injectSaga  from 'utils/injectSaga';
import  injectReducer  from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import bindActionCreators from 'redux';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// useInjectReducer({ key: 'loginContainer', reducer });
//   useInjectSaga({ key: 'loginContainer', saga });

class LoginContainer extends Component{
  constructor(props){
    super(props)
    this.state ={
      data:{
      username :'superadmin',
      password : 'superadmin@123',
    },};
  }
handleSubmit=(e) => {
  e.preventDefault();
  const data={
   username: this.state.data.username,
   password: this.state.data.password,
  }
  this.props.login(data)
}
onInputChange = e => {
  const {name} =  e.target;
  const {data} = this.state;
  data[name] = e.target.value
  this.setState({
    data,
  })
}
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input required type='text' name='username' 
          value={this.state.data.username} 
          onChange={this.onInputChange} 
          placeholder = 'Enter the username' />
          <br />
          <input required type='password' 
          name='password'
           value={this.state.data.password}  
           onChange={this.onInputChange} 
           placeholder = 'Enter the password' />
           <br />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

// LoginContainer.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const withReducer = injectReducer({ key: 'LoginContainer', reducer });
const withSaga = injectSaga({ key: 'LoginContainer', saga });

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ loginRequest }, dispatch);
// }

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginRequest(data)),
});

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);