import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Toast from '../Toast/Toast';
import toastPropType from '../../propTypes/toastPropTypes';

import './errorWarper.css';

const ErrorWarper = ({ toastHandlingList }) => (
  <div className="notificationWarper">
    {toastHandlingList.map((toast) => (
      <Toast toast={toast} key={toast.id} type={toast.type} />
    ))}
  </div>
);

ErrorWarper.propTypes = {
  toastHandlingList: PropTypes.arrayOf(toastPropType).isRequired,
};

const mapStateToProps = ({ booksStore }) => ({
  toastHandlingList: booksStore.toastHandlingList,
});

export default connect(mapStateToProps, null)(ErrorWarper);
