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
import SideBar from '../../components/SideBar/';
import * as jwt from 'jwt-decode';
import { Sidebar, Checkbox, Form } from 'semantic-ui-react';

export function DashBoard() {
  useInjectReducer({ key: 'dashBoard', reducer });
  useInjectSaga({ key: 'dashBoard', saga });

  // const decoded = jwt(localStorage.getItem('token'));
  //   console.log(decoded.user.username);   
  return (
    // <a href="#about">Logout</a>
    <div className="ui sidebar inverted vertical menu">
    <a className="item">
      1
    </a>
    <a className="item">
      2
    </a>
    <a className="item">
      3
    </a>
  </div>
  );
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
