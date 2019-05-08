import React from 'react';
import Navbar from './navbar';
import * as jwt from 'jwt-decode';
import { decode } from 'punycode';
import { connect } from 'react-redux';
// const decoded = jwt(localStorage.getItem('token'));
// console.log(decoded, 'from decoder');


class profile extends React.Component {
  render() {
    console.log(this.props,">>>>>s")
    return (
      <div>
        <Navbar />
        hello profile
        <h1>{this.props.token.value.userInfo.username}</h1>
      </div>
    );
  }
}
function mapStateToProps(store) {
  console.log('from profile', store);
  return {
    token: store.manish,
  };
}
export default connect(mapStateToProps)(profile);
