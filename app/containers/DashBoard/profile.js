import React from 'react';
import Navbar from './navbar';
import * as jwt from 'jwt-decode';
import { decode } from 'punycode';
import { connect } from 'react-redux';
// const decoded = jwt(localStorage.getItem('token'));
// console.log(decoded, 'from decoder');


class profile extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        hello profile
        <h1>{this.props.manish.Loading}</h1>
      </div>
    );
  }
}
function mapStateToProps(manish) {
  console.log('from profile', manish);
  return {
    manish,
  };
}
export default connect(mapStateToProps)(profile);
