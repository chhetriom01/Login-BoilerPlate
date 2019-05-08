import React from 'react';
import Navbar from './navbar';
import * as jwt from 'jwt-decode';
import { decode } from 'punycode';
import { connect } from 'react-redux';

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
export default connect(mapStateToProps)(profile);
