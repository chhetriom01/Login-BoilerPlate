import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import NavBar from '../DashBoard/navbar';
import { connect } from 'react-redux';
class ListTestimonial extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        List of Data
        {/* {this.props.} */}
      </div>
    );
  }
}
function mapStateToPops(fetch){
console.log(fetch,'from list testimonial')
return {fetch}
}
export default connect(mapStateToPops)(ListTestimonial);
