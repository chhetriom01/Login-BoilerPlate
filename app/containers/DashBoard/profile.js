import React from 'react';
import Navbar from './navbar';
import * as jwt from 'jwt-decode';
import { decode } from 'punycode';

// const decoded = jwt(localStorage.getItem('token'));
// console.log(decoded, 'from decoder');

export default class profile extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <thead>
    
         {/* User Name :{ decoded.user.username}<br />
         Email :{decoded.user.email}<br />
         User Id :{decoded.user._id}<br />
          */}
     
       </thead>
      </div>
    );
  }
}
