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
      </div>
    );
  }
}
function mapStateToProps(weather) {
  console.log('from profile', weather);
  return {
    weather
  };
}
export default connect(mapStateToProps)(profile);
