import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import NavBar from '../DashBoard/navbar';
import { connect } from 'react-redux';
class ListTestimonial extends React.Component {
  render() {
    console.log(this.props.fetch.Testimonial.om)
    const {om} = this.props.fetch.Testimonial;
    const nameList = om.map(name =>{
      return(
      // console.log(name.personName)
      <div>{name.organization}{name.personName}{name.testimonialContent}</div>
    )})
    return (
      <div>
        <NavBar />
        List of Data
  {nameList}
  {/* {this.props.fetch.Testimonial.om[0].organization} */}
      </div>
    );
  }
}
function mapStateToPops(fetch){
console.log(fetch,'from list testimonial')
return {fetch}
}
export default connect(mapStateToPops)(ListTestimonial);
