import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Redirect , Link} from 'react-router-dom';

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

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(push('/'));
  };

  // handleProfile =() => {
  //   return {this.props.}
  // }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
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
