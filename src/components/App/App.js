import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import toastPropType from '../../propTypes/toastPropTypes';
import Routes from '../Routes/Routes';
import Layout from '../Layout/Layout';
import ErrorBoundary from '../Errors/error';
import Spinner from '../Spinner/Spinner';
import ErrorWarper from '../ErrorWarper/ErrorWarper';

import 'normalize.css';
import './app.css';

const App = ({ toastHandlingList }) => (
  <Router>
    <ErrorBoundary>
      <Layout>
        <Spinner />
        <Routes />
      </Layout>
      {toastHandlingList.length && <ErrorWarper />}
    </ErrorBoundary>
  </Router>
);

App.propTypes = {
  toastHandlingList: PropTypes.arrayOf(toastPropType).isRequired,
};

const mapStateToProps = ({ booksStore }) => ({
  toastHandlingList: booksStore.toastHandlingList,
});

export default connect(mapStateToProps, null)(App);
