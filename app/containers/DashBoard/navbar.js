import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as jwt from 'jwt-decode';

// const decoded = jwt(localStorage.getItem('token'));
// console.log(decoded, 'from decoded');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  handleProfile = () => {
    return {}
  };
  

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(push('/'));
  };

  
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
          as={Link} to="/dashboard"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
          as={Link} to="/testomonial"
          name="home"
            name="Testimonial"
            active={activeItem === 'Testimonial'}
            onClick={this.handleTesto}
          />
          <Menu.Item
            name="Profile"
            active={activeItem === 'profile'}
            onClick={this.handleProfile}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleLogout}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect()(NavBar);
