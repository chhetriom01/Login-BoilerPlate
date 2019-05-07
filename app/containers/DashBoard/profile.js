import React from 'react';
import Navbar from './navbar';
import * as jwt from 'jwt-decode';
import { decode } from 'punycode';
import { connect } from 'react-redux';
// const decoded = jwt(localStorage.getItem('token'));
// console.log(decoded, 'from decoder');

class profile extends React.Component {
  userName() {
    return this.props.map(om => {
      // console.log(om.success)
      return <li>{om.success}</li>;
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        hello profile
                 {this.userName}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('from profile', weather)
  return {
    
    weather: state.weather,
    
  };
}
export default connect()(profile);
