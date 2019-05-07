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
import NavBar from './navbar';
import { Redirect, Link } from 'react-router-dom';

class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
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
