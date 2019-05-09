import React from 'react';
import Navbar from './navbar';
import * as jwt from 'jwt-decode';
import { decode } from 'punycode';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {loginRequest} from '../LoginContainer/actions'

class profile extends React.Component {


  render() {
    const {
      token,
      userInfo: { username, _id, userRole },
    } = this.props.data.LoginContainer.value;
    return (
      <div>
        <Navbar />
        Name :{username}
        <br />
        Your Role :{userRole}
        <br />
        Your Id :{_id}
      </div>
    );
  }
}
function mapStateToProps(data) {
  console.log('from profile', data);
  return {
    data,
  };
}
// const mapDispatchToProps = dispatch => ({
//   loginRequest: () => dispatch(loginRequest()),
// })

export default connect(mapStateToProps)(profile);
