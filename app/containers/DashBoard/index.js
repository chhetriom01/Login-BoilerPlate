/**
 *
 * DashBoard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Menu, Segment } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import NavBar from './navbar'



class DashBoard extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(push('/login'));
  };

  // handleProfile =() => {
  //   return {this.props.}
  // }
  render() {
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

DashBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashBoard: makeSelectDashBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DashBoard);
