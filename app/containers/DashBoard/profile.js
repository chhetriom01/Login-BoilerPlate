import React from 'react';
import Navbar from './navbar';
import * as jwt from 'jwt-decode';
import { decode } from 'punycode';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginRequest } from '../LoginContainer/actions';
// import * as jwt from 'jwt-decode';
class profile extends React.Component {
  render() {
    const decoded = jwt(localStorage.getItem('token'));
    console.log(decoded, "ajfn");
    // const {
    //   token,
    //   userInfo: { username, _id, userRole },
    // } = this.props.data.LoginContainer.value;
    return (
      <div>
        <Navbar />
        {/* Name :{username}<br /> */}
        Name from decode :{decoded.user.username}
        <br />
        {/* Your Role :{userRole} */}
        Your Role : {decoded.user.userRole}
        <br />
        {/* Your Id :{_id} */}
        
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
