import React from 'react';
import {
  Button,
  Header,
  Image,
  Modal,
  List,
  Card,
  Statistic,
  CardContent,
} from 'semantic-ui-react';
import NavBar from '../DashBoard/navbar';
import { connect } from 'react-redux';
import './index.css';
import { deleteRequesting } from './actions';
import * as jwt from 'jwt-decode';

class ListTestimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '5cd70d24208e8c0a284b5db4',
    };
  }

  handleClick = e => {
    this.props.dispatch(deleteRequesting(this.state.id));
  };
  render() {
    const decoded = jwt(localStorage.getItem('token'));
    // console.log(decoded, 'tokenagaldfaldfja;');
    return (
      <div style={{ padding: '30px' }}>
        <NavBar />
        {/* this.props.fetch.Testimonial.om &&
          this.props.fetch.Testimonial.om.length > 0 &&
        List of Data */}
        <br />
        {this.props.fetch.Testimonial.om.map((element, index) => (
          <div key={index} className="Card">
            <Card>
              <Card.Content>
                <Card.Header>{element.personName}</Card.Header>
                <Card.Meta>{element.testimonialContent}</Card.Meta>
                <Card.Meta>{element.organization}</Card.Meta>
                <Card.Description>{element._id}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Edit
                  </Button>
                  <Button basic color="red" onClick={this.handleClick}>
                    Delete
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </div>
        ))}
        <div />
      </div>
    );
  }
}
function mapStateToPops(fetch) {
  console.log(fetch, 'from list testimonial');
  return { fetch };
}
export default connect(mapStateToPops)(ListTestimonial);
